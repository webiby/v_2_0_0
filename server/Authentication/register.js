const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./../dbconfig');
const { Console } = require('console');
const app = express();
const port = process.env.PORT || 8082;

app.use(cors());
app.use(bodyParser.json());

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//  Implement User Registration
app.post('/register', async (req, res) => {
    const { userid, password, role } = req.body;
    // Add validation for userid and password
    if (!userid || !password) {
        return res.status(400).json({ message: 'Please provide a valid userid and password' });
    }

    try {
        // Hash the password using bcrypt
        const saltRounds = 8; // Number of salt rounds for hashing
        const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Set a default role if the client doesn't specify one (e.g., 'user')
    const defaultRole = '1';
    const userRole = role || defaultRole;

    // You should hash the password before storing it in the database.
    // You can use libraries like bcrypt for this purpose.
    // For this example, we'll assume the password is already hashed.
    const sql = 'INSERT INTO users (userid, password, role_id) VALUES (?, ?, ?)';
    db.query(sql, [userid, hashedPassword, userRole], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Registration failed' });
        } else {
            res.status(201).json({ message: 'Registration successful' });
        }
    });
    } catch (error) {
        console.error('Error during password hashing:', error);
        return res.status(500).json({ message: 'Registration failed' });
    }
});
  