class Employee {
  static async view(pool) {
    const query = 'SELECT * FROM employees;';

    const result = await pool.query(query);
    console.table(result.rows);
  }

  static async add(pool, first_name, last_name, role_id, manager_id) {
    const query = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4);`;
    const values = [first_name, last_name, role_id, manager_id];

    await pool.query(query, values);

    console.log(`Added ${first_name} ${last_name} into employees`);
  }

  static async update(pool, role_id, id) {
    const query = `UPDATE employees SET role_id = $1 WHERE id = $2;`;
    const values = [role_id, id];

    await pool.query(query, values);

    console.log('Employee updated');
  }
}

module.exports = Employee;