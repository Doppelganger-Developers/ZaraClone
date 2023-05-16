import express, { Express } from 'express';
import connection from './config';
import cors from 'cors';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection;

// Setting the port and listening for connections
const port: number = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
