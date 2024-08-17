class Role {
  static async view(pool) {
    const query = 'SELECT * FROM roles';

    const result = await pool.query(query);
    console.log(result.rows);
  }
}

module.exports = Role;