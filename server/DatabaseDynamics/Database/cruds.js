const db = require('../../dbconfig');

module.exports = {
    createDatabase: (dbName, callback) => {
        const query = `CREATE DATABASE ${dbName}`;

        db.query(query, (error, results) => {
        if (error) {
            console.error('Error creating database: ' + error.stack);
            callback(error, null);
            return;
        }

        callback(null, results);
        });
    },

    readDatabases: (callback) => {
        const query = 'SHOW DATABASES';

        db.query(query, (error, results) => {
        if (error) {
            console.error('Error reading databases: ' + error.stack);
            callback(error, null);
            return;
        }

        const databases = results.map((row) => row.Database);
        callback(null, databases);
        });
    },

    updateDatabase: (oldName, newName, callback) => {
        const query = `ALTER DATABASE ${oldName} RENAME ${newName}`;

        db.query(query, (error, results) => {
        if (error) {
            console.error('Error updating database: ' + error.stack);
            callback(error, null);
            return;
        }

        callback(null, results);
        });
    },

    deleteDatabase: (dbName, callback) => {
        const query = `DROP DATABASE ${dbName}`;

        db.query(query, (error, results) => {
        if (error) {
            console.error('Error deleting database: ' + error.stack);
            callback(error, null);
            return;
        }

        callback(null, results);
        });
    },
};
