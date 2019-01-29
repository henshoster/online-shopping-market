const mysql = require("mysql");

class DataBaseConnector {
  constructor() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: "localhost",
      user: "root",
      password: "",
      database: "mystore"
    });
    this.pool.on("acquire", connection =>
      console.log("Pool ID is:" + connection.threadId)
    );
  }
  getAll(callBack, table) {
    this.pool.query("SELECT * From ??", [table], callBack);
  }
  getById(callBack, table, id) {
    this.pool.query(`SELECT * From ?? WHERE id=?`, [table, id], callBack);
  }
  getBySearch(callBack, table, searchTerm, text) {
    this.pool.query(
      `SELECT * From ?? WHERE ?? LIKE ?`,
      [table, searchTerm, `%${text}%`],
      callBack
    );
  }
  createNew(callBack, table, obj) {
    this.pool.query("INSERT INTO ?? SET ?", [table, obj], callBack);
  }
  update(callBack, table, id, obj) {
    this.pool.query("UPDATE ?? SET ? WHERE id = ?", [table, obj, id], callBack);
  }
  delete(callBack, table, id) {
    this.pool.query("DELETE FROM ?? WHERE id = ?", [table, id], callBack);
  }
}
module.exports = DataBaseConnector;
