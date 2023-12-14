// routes/index.js
const express = require('express');
const router = express.Router();
const db = require('../../dbconfig');
const { listTables } = require('../Table/list');
const { describeTable } = require('../Column/list');

// Function to fetch a list of tables in the database
function fetchTables(callback) {
  const query = 'SHOW TABLES';
  db.query(query, (error, results) => {
    if (error) {
      return callback(error, null);
    }
    const tables = results.map((row) => row[`Tables_in_${db.config.database}`]);
    callback(null, tables);
  });
}

// Generate CRUD routes for each table
fetchTables((error, tables) => {
  if (error) {
    console.error('Error fetching tables:', error);
    return;
  }

  // Generate CRUD routes for each table
  tables.forEach((table) => {
    
    // Read all tables
    router.get('/all', (req, res) => {
      fetchTables((error, tables) => {
        if (error) {
          console.error('Error fetching tables:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        // Initialize an array to hold promises
        const tableInfoPromises = tables.map((table) => {
          return new Promise((resolve, reject) => {
            // Fetch the total number of rows for each table
            const countRowsQuery = `SELECT COUNT(*) as row_count FROM ${table}`;

            db.query(countRowsQuery, (rowError, rowResults) => {
              if (rowError) {
                reject(rowError);
              } else {
                const rowsFilled = rowResults[0].row_count;

                // Describe the table to get column count
                describeTable(table, (describeError, columns) => {
                  if (describeError) {
                    reject(describeError);
                  } else {
                    const columnsFilled = columns.length;

                    // Resolve with the table information
                    resolve({
                      table,
                      rowsFilled,
                      columnsFilled,
                    });
                  }
                });
              }
            });
          });
        });

        // Use Promise.all to get information for all tables
        Promise.all(tableInfoPromises)
          .then((tableInfo) => {
            res.status(200).json(tableInfo);
          })
          .catch((error) => {
            console.error('Error getting table information:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          });
      });
    });
    
    // Create a record in a table
    router.post(`/${table}/create`, (req, res) => {
      const data = req.body;

      const query = `INSERT INTO ${table} SET ?`;

      db.query(query, data, (error, result) => {
        if (error) {
          return res.status(500).json({ error: 'Error creating record' });
        }
        return res.status(201).json(result);
      });
    });

    // Define a route to fetch and describe table details
    router.get('/:table/details', (req, res) => {
      const { table } = req.params;

      listTables((error, tableNames) => {
        if (error) {
          console.error('Error listing tables:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (!tableNames.includes(table)) {
          return res.status(404).json({ error: 'Table not found' });
        }

        describeTable(table, async (error, columns) => {
          if (error) {
            console.error('Error describing table:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }

          // Fetch typeValues for enum columns
          for (const column of columns) {
            if (column.Type.startsWith('enum')) {
              const enumValues = await getEnumValues(table, column.Field);
              column.typeValues = enumValues;
            }
          }

          // You can send the table details with typeValues as a JSON response
          res.status(200).json({ table, columns });
        });
      });
    });

    // Function to fetch enum values for a column
    function getEnumValues(table, column) {
      return new Promise((resolve, reject) => {
        const query = `SHOW COLUMNS FROM ${table} LIKE '${column}'`;

        // Execute the query to fetch enum values
        db.query(query, (error, results) => {
          if (error) {
            reject(error);
          } else {
            const enumValues = results[0].Type.match(/'([^']+)'/g).map(value => value.replace(/'/g, ''));
            resolve(enumValues);
          }
        });
      });
    }

    // Read records from a table
    router.get(`/${table}/all`, (req, res) => {
      const query = `SELECT * FROM ${table}`;

      db.query(query, (error, results) => {
        if (error) {
          return res.status(500).json({ error: 'Error reading records' });
        }
        return res.status(200).json(results);
      });
    });

    // Read single record from a table
    router.get('/:table/id/:id', (req, res) => {
      const table = req.params.table;
      const id = req.params.id;
      const query = `SELECT * FROM ${table} WHERE id = ?`;
    
      db.query(query, [id], (error, results) => {
        if (error) {
          return res.status(500).json({ error: 'Error fetching user' });
        }
    
        if (results.length === 0) {
          return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(results[0]); // Assuming you expect a single user
      });
    });

    // Update a record in a table
    router.put(`/${table}/id/:id/update`, (req, res) => {
      const id = req.params.id;
      const newData = req.body;

      const query = `UPDATE ${table} SET ? WHERE id = ?`;

      db.query(query, [newData, id], (error, result) => {
        if (error) {
          return res.status(500).json({ error: 'Error updating record' });
        }
        return res.status(200).json(result);
      });
    });

    // Delete a record from a table
    router.delete(`/${table}/id/:id/delete`, (req, res) => {
      const id = req.params.id;
      const query = `DELETE FROM ${table} WHERE id = ?`;

      db.query(query, [id], (error, result) => {
        if (error) {
          return res.status(500).json({ error: 'Error deleting record' });
        }
        return res.status(200).json(result);
      });
    });
  });
});

// Truncate and populate the "webiby_database_table_lists" table
router.get('/populate-table-list', async (req, res) => {
  // Step 1: Truncate the "webiby_database_table_lists" table
  const truncateQuery = 'TRUNCATE TABLE webiby_database_table_lists';

  try {
    await new Promise((resolve, reject) => {
      db.query(truncateQuery, (truncateError) => {
        if (truncateError) {
          console.error('Error truncating the table:', truncateError);
          reject(truncateError);
        } else {
          resolve();
        }
      });
    });

    // Step 2: Fetch all table names
    const showTablesQuery = 'SHOW TABLES';

    const [results, showTablesError] = await db.query(showTablesQuery);

    if (showTablesError) {
      console.error('Error fetching table names:', showTablesError);
      return res.status(500).json({ error: 'Error fetching table names' });
    }

    const tableNames = results.map((row) => row[`Tables_in_${db.config.database}`]);

    // Step 3: Insert data into "webiby_database_table_lists" and set rows_filled
    const insertQuery =
      'INSERT INTO webiby_database_table_lists (id, table_name, proper_name, rows_filled) VALUES ?';

    // Ensure tableNames is an Array
    if (!Array.isArray(tableNames)) {
      console.error('tableNames is not an array');
      // Handle appropriately, e.g., return an error response
    }
    // Check for Empty Array
    if (tableNames.length === 0) {
      console.error('tableNames is an empty array');
      // Handle appropriately, e.g., return an error response
    }
    // Initialize an array to hold promises
    console.log('Before map:', tableNames);
    const promises = tableNames.map(async (tableName, index) => {
      console.log('Processing table:', tableName);
      try {
        console.log('Processing table:', tableName);
        const properName = tableName
          .split('_')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
    
        const countRowsQuery = `SELECT COUNT(*) as row_count FROM ${tableName}`;
        const [rowResults] = await db.query(countRowsQuery);
        const rowsFilled = rowResults[0].row_count;
    
        return [index + 1, tableName, properName, rowsFilled];
      } catch (error) {
        console.error('Error fetching row counts:', error);
        throw error; // Rethrow the error to be caught in the outer catch block
      }
    });
    console.log('After map:', promises);

    try {
      const data = await Promise.all(promises);

      // Use Promise.all to insert the data after fetching row counts for all tables
      const [result, insertError] = await db.query(insertQuery, [data]);
      const rowResults = result[0]; // Check the structure of queryResult
      console.log(rowResults);

      if (insertError) {
        return res.status(500).json({
          error: 'Error inserting data into webiby_database_table_lists',
        });
      }

      return res
        .status(200)
        .json({ message: 'Table list populated successfully', result });
    } catch (error) {
      console.error('Error fetching row counts for tables:', error);
      return res
        .status(500)
        .json({ error: 'Error fetching row counts for tables' });
    }
  } catch (error) {
    console.error('Internal Server Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
