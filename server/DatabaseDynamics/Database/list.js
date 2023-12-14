const db = require('../../dbconfig');

  module.exports = {
    listDatabases: (callback) => {
      const query = 'SHOW DATABASES';
  
      db.query(query, (error, results) => {
        if (error) {
          console.error('Error querying databases: ' + error.stack);
          callback(error, null);
          return;
        }
  
        const databases = results.map((row) => row.Database);
        callback(null, databases);
      });
    },
  };