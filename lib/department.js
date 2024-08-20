class Department {
  static async view(pool) {
    const query = 'SELECT * FROM departments;';

    const result = await pool.query(query);
    console.table(result.rows);
  }

  static async add(pool, name) {
    const query = 'INSERT INTO departments (name) VALUES ($1);';
    const values = [name];

    await pool.query(query, values);

    console.log(`Added ${name} into departments`);
  }
}

module.exports = Department;