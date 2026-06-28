require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Establish target connection pipeline
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL Database:', err);
    return;
  }
  console.log('✅ Connected to Real MySQL Database (Database: user)'); 
});

// --- Dynamic Database & Table Setup Queries ---
db.query('CREATE DATABASE IF NOT EXISTS user', (err) => {
  if (!err) {
    db.query('USE user', () => {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS login (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL
        )
      `;
      db.query(createTableQuery, (tableErr) => {
        if (!tableErr) console.log('📋 Database Table structure verification complete.');
      });
    });
  }
});

// --- Signup route ---
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const st = 'INSERT INTO login (name, email, password) VALUES (?, ?, ?)';
    db.query(st, [name, email, password], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          res.status(409).json({ message: 'Email already registered' });
        } else {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
        }   
      } else {    
        console.log(`👤 New User Registered successfully inside MySQL Table: ${email}`);
        res.status(201).json({ message: 'success'});
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// --- Login route ---
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {  
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  const st = 'SELECT * FROM login WHERE email = ? AND password = ?';
  db.query(st, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    if (results.length > 0) {   
      console.log(`🔑 User Login Access granted via SQL Auth: ${email}`);
      res.status(200).json({ message: 'success' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on http://localhost:${PORT}`));
