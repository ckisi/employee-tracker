class Role {
  static async view(pool) {
    const query = 'SELECT * FROM roles';

    const result = await pool.query(query);
    console.log(result.rows);
  }

  static async add(pool, title, salary, department) {
    const query = `INSERT INTO roles (title, salary, department) VALUES (${title}, ${salary}, ${department})`;
    
    pool.query(query);

    console.log(`Added ${title} into roles`);
  }
}

module.exports = Role;