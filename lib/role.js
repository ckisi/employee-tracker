class Role {
  static async view(pool) {
    const query = 'SELECT * FROM roles;';

    const result = await pool.query(query);
    console.table(result.rows);
  }

  static async add(pool, title, salary, department) {
    const query = 'INSERT INTO roles (title, salary, department) VALUES ($1, $2, $3);';
    const values = [title, salary, department];
    
    await pool.query(query, values);

    console.log(`Added ${title} into roles`);
  }
}

module.exports = Role;