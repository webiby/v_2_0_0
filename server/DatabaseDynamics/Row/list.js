const db = require('../../dbconfig');
const { describeTable } = require('../Column/list');
//////////////////////
const { listTables } = require('../Table/list');

listTables((error, tableNames) => {
    if (error) {
        console.error('Error listing tables:', error);
      return;
    }
  
    // console.log('Tables in the database:');
    tableNames.forEach((tableName) => {
    //////////////////////
    // const tableName = 'your_table_name';

        describeTable(tableName, (error, columns) => {
            if (error) {
                console.error('Error describing table:', error);
                return;
            }

            // console.log(`Columns in table "${tableName}":`);
            columns.forEach((column) => {
                // console.log(`Name: ${column.Field}, Type: ${column.Type}, Null: ${column.Null}, key: ${column.Key}, default: ${column.Default}, extra: ${column.Extra}`);
            });

            // Close the MySQL connection if needed
            // connection.end();
        });
    /////////////////////////////////
    });
    
    // Close the MySQL connection if needed
    // connection.end();
});

module.exports = listTables;
