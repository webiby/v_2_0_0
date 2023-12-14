const db = require('../../dbconfig');
const { listTables } = require('../Table/list');

listTables((error, tableNames) => {
    if (error) {
      console.error('Error listing tables:', error);
      return;
    }
  
    // console.log('Tables in the database:');
    tableNames.forEach((tableName) => {
      // console.log(tableName);
    });
  
    // Close the MySQL connection if needed
    // db.end();
});

////////////////////////////////////////
// Column Info From current Databases  
module.exports = {
  describeTable: (tableName, callback) => {
    const query = `DESCRIBE ${tableName}`;

    db.query(query, (error, results) => {
      if (error) {
        console.error('Error describing table: ' + error.stack);
        callback(error, null);
        return;
      }

      callback(null, results);
    });
  },
};