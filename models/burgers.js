const orm = require('../config/orm.js');

const burger = {
  selectAll(cb) {
    orm.selectAll((res) => cb(res));
  },

  insertOne(burger_name, cb) {
    orm.insertOne(burger_name, (res) => cb(res));
  },

  updateOne(id, boolean, cb) {
    orm.updateOne(boolean, id, (res) => cb(res));
  }
};

module.exports = burger;
