
import connection from "../config";

const getAll=(callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };

const getAllMen = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="Men"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };
  const getOneProduct = async (productname) => {
    const sql = `SELECT * FROM products where productname="${productname}"`;
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
  const getAllWommen = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="Women"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };

  const getAllEnfants = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="Kids"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };

  const getAllBeauty = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="Beauty"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };

  
  export {getAllMen,getOneProduct,getAllWommen,getAllEnfants,getAllBeauty,getAll}
