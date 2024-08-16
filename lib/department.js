const { Pool } = require('pg');

class Department {
  static async view(pool) {
    const query = 'SELECT * FROM departments';

    const result = await pool.query(query);
    console.log(result.rows);
  }
}

module.exports = Department;