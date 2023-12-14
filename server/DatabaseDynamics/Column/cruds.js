const db = require('../../dbconfig');
const { listDatabases } = require('../Database/list');
const { listTables } = require('../Table/list');

// Function to check if a table is a parent table
function isParentTable(tableName) {
    // Check if the table name before "_id" is in the list of table names
    const potentialParentTable = tableName.split('_id')[0];
    return tableName.includes(potentialParentTable);
  }

// Function to add new column after identify parent tables based on column names
function findParentTables(tableNames) {
    const parentTables = [];
  
    tableNames.forEach((tableName) => {
        const columnsQuery = `SHOW COLUMNS FROM ${tableName}`;
        // const addColumnQuery = `ALTER TABLE ${tableName} ADD ${tableName}_name VARCHAR(100) NULL AFTER id`;
  
        db.query(columnsQuery, (err, results) => {
            if (err) {
            console.error(`Error getting columns for table ${tableName}:`, err);
            } else {
            const hasParentColumn = results.some((row) => row.Field.endsWith('_id'));
    
            if (hasParentColumn) {
                parentTables.push(tableName);
                console.log(`Found potential parent table: ${tableName}`);
                
                // Add a new column to the parent table
                db.query(addColumnQuery, [], (addColumnErr) => {
                if (addColumnErr) {
                    console.error(`Error adding new column to table ${tableName}:`, addColumnErr);
                } else {
                    console.log(`Added new column to table ${tableName}`);
                }
                });
            }
            }
        });
    });
  
    return parentTables;
}
  
// Function to check and modify the 'active' column
function checkAndModifyActiveColumn(tableNames) {
  tableNames.forEach((tableName) => {
    const checkColumnQuery = `SHOW COLUMNS FROM ${tableName} LIKE 'xyz'`;
    db.query(checkColumnQuery, (columnErr, columnResult) => {
      if (columnErr) {
        console.error(`Error checking column for table ${tableName}:`, columnErr);
      } else {
        if (columnResult.length > 0) {
            // 'active' column exists in the table, proceed with the ALTER TABLE query
            // const updateQuery = `ALTER TABLE ${tableName} CHANGE COLUMN active ${tableName}_active ENUM('Y', 'N') NOT NULL`;
            // const updateQuery = `ALTER TABLE ${tableName} MODIFY COLUMN ${tableName}_active ENUM('Y', 'N') NOT NULL`;
            // const values = [];
            // const updateQuery = `ALTER TABLE ${tableName} ADD ${tableName}_name VARCHAR(100) NULL`;
            // const values = [];

          db.query(updateQuery, values, (err, result) => {
            if (err) {
              console.error(`Error updating column in table ${tableName}:`, err);
            } else {
              console.log(`Updated column in table ${tableName}`);
            }
          });
        } else {
          console.log(`column does not exist in table ${tableName}`);
        }
      }
    });
  });
}

// Function to check if a column exists and remove it if it does
function checkAndRemoveColumn(tableName, columnToRemove) {
    const checkColumnQuery = `SHOW COLUMNS FROM ${tableName} LIKE '${columnToRemove}'`;
  
    db.query(checkColumnQuery, [], (checkError, checkResult) => {
      if (checkError) {
        console.error(`Error checking column for table ${tableName}:`, checkError);
      } else if (checkResult.length > 0) {
        // The column exists, so we can proceed to remove it
        // const removeColumnQuery = `ALTER TABLE ${tableName} DROP COLUMN ${columnToRemove}`;
  
        db.query(removeColumnQuery, [], (removeError) => {
          if (removeError) {
            console.error(`Error removing column ${columnToRemove} from table ${tableName}:`, removeError);
          } else {
            console.log(`Removed column ${columnToRemove} from table ${tableName}`);
          }
        });
      } else {
        console.log(`Column ${columnToRemove} does not exist in table ${tableName}`);
      }
    });
}  

listDatabases((error, databases) => {
  if (error) {
    console.error(error);
    return;
  }

  const currentDatabase = db.config.database;

  if (databases.includes(currentDatabase)) {
    db.changeUser({ database: currentDatabase }, (dbError) => {
        if (dbError) {
            console.error(`Error changing database to ${currentDatabase}:`, dbError);
            return;
        }
        // console.log(`Changed database to ${currentDatabase}`);

        listTables((tableError, tableNames) => {
            if (tableError) {
                console.error(`Error listing tables in database ${currentDatabase}:`, tableError);
                return;
            }
            // console.log('List of tables:', tableNames);

            // Add Columns after Identify parent tables based on column names
            // const parentTables = findParentTables(tableNames);
            // console.log('Parent tables:', parentTables);

            // Check and modify the 'active' column
            // checkAndModifyActiveColumn(tableNames);

            // Loop through tables and remove the specified column
            // Loop through tables and check if the column exists, then remove it
            // tableNames.forEach((tableName) => {
            //     const columnToRemove = tableName+'_name'; // Replace with the name of the column you want to remove
            //     checkAndRemoveColumn(tableName, columnToRemove);
            // });
        });
    });
  } else {
    console.error(`Current database ${currentDatabase} not found in the list of databases.`);
  }
});



                        