import express, { Express,Request, Response } from 'express';
import connection from './config';
import cors from 'cors';
import post from "./routes/user"
import prouter from './routes/product';
import hrouter from './routes/help'
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user",post)
app.use("/api/",prouter)
app.use("/api/",hrouter);


connection;


app.get("/api/products/:productname", (req: Request, res: Response) => {
  connection.query(
    "SELECT * FROM products WHERE productname = ?",
    [req.params.productname],
    (err: Error, results: any[], fields: any) => {
      if (err) throw err;
      console.log(results);
      res.send(results);
      console.log(fields);
    }
  );
});
const port: number = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});