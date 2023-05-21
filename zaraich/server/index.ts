import express, { Express,Request, Response } from 'express';
import connection from './config';
import cors from 'cors';
import post from "./routes/user"
import prouter from './routes/product';
import hrouter from './routes/help'
import crouter from './routes/prodcategory';
const app: Express = express();
connection;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user",post)
app.use("/api/p",prouter)
app.use("/api/h",hrouter);
app.use("/api/c",crouter)



const port: number = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});