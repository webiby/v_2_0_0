const express = require('express');
const mysql = require('mysql');//
const cors = require('cors');
// const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4181;

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({//
  connectionLimit: 10,
  host: '127.0.0.1',//
  user: 'u819188605_NEWU',//
  password: 'u819188605_NEWP',//
  database: 'reactnode',//
});//


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:'  + err.stack);
  } else {
    console.log('Connected to MySQL'+ db.threadId);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = db;

