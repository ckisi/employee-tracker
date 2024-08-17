class Department {
  static async view(pool) {
    const query = 'SELECT * FROM departments';

    const result = await pool.query(query);
    console.log(result.rows);
  }

  static async add(pool, name) {
    const query = `INSERT INTO departments (name) VALUES (${name})`;
    
    await pool.query(query);

    console.log(`Added ${name} into departments`);
  }
}

module.exports = Department;