const express = require('express');
const app = express();
const PORT = 3000;
const { Pool } = require('pg');

// Set up PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gradebook_AliciaZheng',
  password: 'postgres',
  port: 5432,
});

// Serve static files from the "public" folder
app.use(express.static('public'));

// Endpoint to fetch grade data from existing students + assignments tables
app.get('/api/grades', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.first_name, s.last_name, avg(a.grade) AS total_grade
      FROM students s
      LEFT JOIN assignments a ON s.student_id = a.student_id
      GROUP BY s.student_id, s.first_name, s.last_name
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching grades:', err);
    res.status(500).json({ error: 'Failed to fetch grades' });
  }
});

// Serve the gradebook HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/gradebook.html');
 
});

// Start the server
app.listen(PORT, () => {
  console.log(`App Server via Express is listening on port ${PORT}`);
});
