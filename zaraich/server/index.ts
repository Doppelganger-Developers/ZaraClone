import express, { Express } from 'express';
import connection from './config';
import cors from 'cors';
import post from "./routes/user"
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user",post)
app.use("/api/user",post)

connection;

// Setting the port and listening for connections
const port: number = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});