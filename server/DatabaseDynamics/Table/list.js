const db = require('../../dbconfig');
const database = require('../Database/list');

database.listDatabases((error, databases) => {
  if (error) {
    console.error(error);
    return;
  }

  // console.log('List of databases:');
  // console.log(databases);

  // You can use the list of databases as needed in this file
  // For example, you can pass it to a function or use it for further operations
  
});

///////////////////////////////////
// Table From current Databases   
module.exports = {
    listTables: (callback) => {
        const query = 'SHOW TABLES';
        
        db.query(query, (error, results) => {
            if (error) {
                console.error('Error querying database: ' + error.stack);
                callback(error, null);
                return;
                }

                const tableNames = results.map((row) => row[`Tables_in_${db.config.database}`]);
                callback(null, tableNames);
        });
    },
};
// Tables From Current Databases