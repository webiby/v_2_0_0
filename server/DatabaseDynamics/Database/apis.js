const express = require('express');
const router = express.Router();
const cruds = require('./cruds');

// Create a new database
router.post('/create', (req, res) => {
  const { dbName } = req.body;

  cruds.createDatabase(dbName, (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Error creating database' });
    }
    return res.status(201).json(result);
  });
});

// Read all databases
router.get('/', (req, res) => {
  cruds.readDatabases((error, databases) => {
    if (error) {
      return res.status(500).json({ error: 'Error reading databases' });
    }
    return res.status(200).json(databases);
  });
});

// Update a database
router.put('/:oldName', (req, res) => {
  const oldName = req.params.oldName;
  const newName = req.body.newName;

  cruds.updateDatabase(oldName, newName, (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Error updating database' });
    }
    return res.status(200).json(result);
  });
});

// Delete a database
router.delete('/:dbName', (req, res) => {
  const dbName = req.params.dbName;

  cruds.deleteDatabase(dbName, (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Error deleting database' });
    }
    return res.status(200).json(result);
  });
});

module.exports = router;
