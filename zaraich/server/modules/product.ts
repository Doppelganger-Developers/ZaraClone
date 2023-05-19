
import connection from "../config";

const getAllMen = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="Men"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };
  const getOneProduct = async (productid) => {
    const sql = `SELECT * FROM products where productid="${productid}"`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
  
  export {getAllMen,getOneProduct}
