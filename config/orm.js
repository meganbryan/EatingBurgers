const connection = require('./connection.js');

const orm = {
  selectAll(cb) {
    const queryString = `SELECT * FROM burgers;`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne(burger_name, cb) {
    let queryString = `INSERT INTO burgers set "burger_name" = ?;`;
    connection.query(queryString, burger_name, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update(boolean, id, cb) {
    let queryString = `UPDATE burgers set ? where "id" = ?;`;
    connection.query(queryString, [boolean, id], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
