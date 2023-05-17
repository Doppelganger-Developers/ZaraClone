import mysql, {Connection} from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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