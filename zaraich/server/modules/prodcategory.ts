import connection from "../config";

const getMenCategory = (callback: (err: any, result: any) => void,category:string) => {
    const sql = `SELECT * FROM products WHERE producttype="Men" AND productcategory={category}`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };
const getWomenCategory = (callback: (err: any, result: any) => void,category:string) => {
    const sql = `SELECT * FROM products WHERE producttype="Women" AND productcategory={category}`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };
const getKidsCategory = (callback: (err: any, result: any) => void,category:string) => {
    const sql = `SELECT * FROM products WHERE producttype="Kids" AND productcategory={category}`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };
export {getMenCategory,getWomenCategory,getKidsCategory}