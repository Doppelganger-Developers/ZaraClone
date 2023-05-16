import { OkPacket } from 'mysql2/promise';
import connection from "../config";

const postOneUser = async (user: any): Promise<OkPacket> => {
  const sql = `INSERT INTO user SET ?`;
  return new Promise((resolve, reject) => {
    connection.query(sql, user, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getOneUser = async (useremail: string) => {
  const sql = `SELECT * FROM user where useremail="${useremail}"`;
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
const getAllUsers = (callback: (err: any, result: any) => void) => {
  const sql = "SELECT * FROM user";
  connection.query(sql, (err: any, result: any) => {
    callback(err, result);
  });
};


export { postOneUser, getOneUser, getAllUsers };