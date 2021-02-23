const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_WHITE_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_WHITE_URL);
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
