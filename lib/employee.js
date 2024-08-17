class Employee {
  static async view(pool) {
    const query = 'SELECT * FROM employees';

    const result = await pool.query(query);
    console.log(result.rows);
  }
}

module.exports = Employee;