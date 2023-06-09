import mysql, {Connection} from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

const db = {
  host: "localhost",
  user: "root",
  password: "Sarhane1991.",
  database: "zara",
};

const connection: Connection = mysql.createConnection(db);
connection.connect((error) => {
  if (error) {
    console.error("Failed to connect to database:", error);
    return;
  }
  console.log("Database connected successfully!");
});

export default connection;