class Employee {
  static async view(pool) {
    const query = 'SELECT * FROM employees';

    const result = await pool.query(query);
    console.log(result.rows);
  }

  static async add(pool, first_name, last_name, role_id, manager_id) {
    const query = `INSERT INTO employees (first_name, last_name, role_id) VALUES ($1, $2, $3, $4)`;
    const values = [first_name, last_name, role_id, manager_id];

    await pool.query(query, values);

    console.log(`Added ${first_name} ${last_name} into employees`);
  }
}

module.exports = Employee;