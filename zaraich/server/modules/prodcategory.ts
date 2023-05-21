import connection from "../config";

const getMenCategory = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="Men"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };
const getWomenCategory = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="Women"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };
const getKidsCategory = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="kids"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };
export {getMenCategory,getWomenCategory,getKidsCategory}