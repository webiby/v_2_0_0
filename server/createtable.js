const db = require('dbconfig.js');

// Create a new table based on an existing one
app.post('/createTableFromExisting', (req, res) => {
    const tableName = req.body.newTableName;
    const existingTableName = req.body.existingTableName;
  
    const createTableQuery = `CREATE TABLE ${tableName} AS SELECT * FROM ${existingTableName}`;
    
    db.query(createTableQuery, (err, result) => {
      if (err) {
        console.error('Error creating table: ', err);
        res.status(500).json({ message: 'Error creating table' });
      } else {
        res.json({ message: 'Table created successfully' });
      }
    });
  });
  
  // Implement CRUD operations (Create, Read, Update, Delete) here
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });