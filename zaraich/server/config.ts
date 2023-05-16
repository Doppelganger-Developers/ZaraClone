const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sarhane1991.',
    database: 'zara'
  });

connection.connect((err: String) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database zara conected !!");
  }
});
module.exports = connection;