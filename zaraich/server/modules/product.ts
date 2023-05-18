import { OkPacket } from 'mysql2/promise';
import connection from "../config";

const getAllMen = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="men"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };
  const getOneProduct = async (productid: number) => {
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

  const getAllWommen = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="wommen"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };

  const getAllEnfants = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="enfants"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };

  const getAllBeauty = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM products WHERE producttype="beuaty"`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };
  
  export {getAllMen,getOneProduct,getAllWommen,getAllEnfants,getAllBeauty}
