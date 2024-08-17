class Employee {
  static async view(pool) {
    const query = 'SELECT * FROM employees';

    const result = await pool.query(query);
    console.log(result.rows);
  }

  static async add(pool, first_name, last_name, role_id) {
    const query = `INSERT INTO employees (first_name, last_name, role_id) VALUES (${first_name}, ${last_name}, ${role_id})`;
    
    pool.query(query);

    console.log(`Added ${first_name} ${last_name} into employees`);
  }
}

module.exports = Employee;