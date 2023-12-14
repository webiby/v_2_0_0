const dotenv = require('dotenv').config();

const apis = require('./DatabaseDynamics/Database/apis');
const apisCruds = require('./DatabaseDynamics/Row/apisCruds');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');

const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require('body-parser');
const passport = require('./Authentication/oauth');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

///////////////////////////////////////

const pool = mysql.createPool({
  host: 'localhost',//
  user: 'u819188605_NEWU',//
  password: 'u819188605_NEWP',//
  database: 'reactnode',//
});
//////////////////////////////////////////////
//  A middleware function
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET_KEY || 'default-secret-key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
//////////////////////////////////////////////
// Define routes for Google and Facebook authentication
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  // Redirect logic after successful Google authentication
  res.redirect('/dashboard');
});
//
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
  // Redirect logic after successful Facebook authentication
  res.redirect('/dashboard');
});
//////////////////////////////////////////////
// Middleware to set cache control headers for specific routes
app.use('/api/databases', (req, res, next) => {
  // Set cache control headers to disable caching for these routes
  res.set('Cache-Control', 'no-store');
  next();
});
// Mount the database router under the '/api/databases' path
app.use('/api/databases', apis);
//////////////////////////////////////////////
app.use('/api/table', (req, res, next) => {
  // Set cache control headers to disable caching for these routes
  res.set('Cache-Control', 'no-store');
  next();
});
app.use('/api/table', apisCruds);
//////////////////////////////////////////////
// Registration
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const connection = await pool.getConnection();
    await connection.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    connection.release();

    // Respond with a success message
    console.log('Registration successful for:', username);
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});
//////////////////////////////////////////
// username/password Login
app.post('/api/login', passport.authenticate('local', { session: false }), async (req, res) => {
  const { username, password } = req.body;

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);
    connection.release();

    if (rows.length === 0) {
      // Log the failed login attempt
      console.error(`Login attempt for non-existent user: ${username}`);
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      const user = req.user;
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        // Log the failed login attempt
        console.error(`Failed login attempt for user: ${username}`);
        console.error('Bcrypt compare error:', isPasswordValid);
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        // Successful login
        console.log(`Successful login for user: ${username} & password:***`);
        
        // Determine the redirection URL based on the user's role
        let redirectUrl = '/login'; // Default to /login on failure
        if (user.type === 1) {
          redirectUrl = `/admin/dashboard/${user.id}`;
        } else if (user.type === 0) {
          redirectUrl = '/client/dashboard';
        } else if (user.type === 2) {
          redirectUrl = '/master/dashboard';
        }

        // Respond with the JWT token and the redirection URL
        const secretKey = process.env.JWT_SECRET_KEY || 'default-secret-key';
        const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, {
          expiresIn: '1h',
        });
        
        // Return the token to the client
        res.status(200).json({ token, redirectUrl });
      }
    }
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
//////////////////////////////////////////
// OAuth Google Login
app.get('/api/login/google', passport.authenticate('google', { session: false }));
app.get('/api/login/google/callback', passport.authenticate('google', { session: false }), async (req, res) => {
  const { username, password } = req.body;

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);
    connection.release();

    if (rows.length === 0) {
      // Log the failed login attempt
      console.error(`Login attempt for non-existent user: ${username}`);
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      const user = req.user;
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        // Log the failed login attempt
        console.error(`Failed login attempt for user: ${username}`);
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        // Successful login
        console.log(`Successful login for user: ${username}`);
        
        // Determine the redirection URL based on the user's role
        let redirectUrl = '/login'; // Default to /login on failure
        if (user.type === 1) {
          redirectUrl = `/admin/dashboard/${user.id}`;
        } else if (user.type === 0) {
          redirectUrl = '/client/dashboard';
        } else if (user.type === 2) {
          redirectUrl = '/master/dashboard';
        }

        // Respond with the JWT token and the redirection URL
        const secretKey = process.env.JWT_SECRET_KEY || 'default-secret-key';
        const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, {
          expiresIn: '1h',
        });
        
        res.status(200).json({ token, redirectUrl });
      }
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});
//////////////////////////////////////////
// OAuth Facebook Login
app.get('/api/login/facebook', passport.authenticate('facebook', { session: false }));
app.get('/api/login/facebook/callback', passport.authenticate('facebook', { session: false }), async (req, res) => {
  const { username, password } = req.body;

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);
    connection.release();

    if (rows.length === 0) {
      // Log the failed login attempt
      console.error(`Login attempt for non-existent user: ${username}`);
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      const user = req.user;
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        // Log the failed login attempt
        console.error(`Failed login attempt for user: ${username}`);
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        // Successful login
        console.log(`Successful login for user: ${username}`);
        
        // Determine the redirection URL based on the user's role
        let redirectUrl = '/login'; // Default to /login on failure
        if (user.type === 1) {
          redirectUrl = `/admin/dashboard/${user.id}`;
        } else if (user.type === 0) {
          redirectUrl = '/client/dashboard';
        } else if (user.type === 2) {
          redirectUrl = '/master/dashboard';
        }

        // Respond with the JWT token and the redirection URL
        const secretKey = process.env.JWT_SECRET_KEY || 'default-secret-key';
        const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, {
          expiresIn: '1h',
        });
        
        res.status(200).json({ token, redirectUrl });
      }
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});
////////////////////////////////////////////
app.get('/admin/dashboard/:id', authenticateToken, (req, res) => {
  // Handle the dashboard route after successful login (OAuth or local)
  res.json({ message: 'Welcome to the dashboard!' });
});
////////////////////////////////////////////

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
