const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_WHITE) {
  connection = mysql.createConnection(process.env.JAWSDB_WHITE);
}
else{
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db',
  });  
}

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
