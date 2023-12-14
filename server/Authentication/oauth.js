const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

///////////////////////////////////////
const pool = mysql.createPool({
  host: 'localhost',//
  user: 'u819188605_NEWU',//
  password: 'u819188605_NEWP',//
  database: 'reactnode',//
});
///////////////////////////////////////

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);
      connection.release();

      if (rows.length === 0) {
        return done(null, false, { message: 'Invalid credentials' });
      }

      const user = rows[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return done(null, false, { message: 'Invalid credentials' });
      }

      return done(null, user);
    } catch (error) {
      console.error('Local authentication error:', error);
      return done(error);
    }
  }
));

passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID',
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  callbackURL: 'http://localhost:3000/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  // Implement user creation or retrieval logic here
  return done(null, profile);
}));

passport.use(new FacebookStrategy({
  clientID: 'YOUR_FACEBOOK_APP_ID',
  clientSecret: 'YOUR_FACEBOOK_APP_SECRET',
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
}, (accessToken, refreshToken, profile, done) => {
  // Implement user creation or retrieval logic here
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);
    connection.release();

    const user = rows[0];
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
