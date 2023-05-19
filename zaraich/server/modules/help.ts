import connection from "../config";

const getAllHelp = (callback: (err: any, result: any) => void) => {
    const sql = `SELECT * FROM help`;
    connection.query(sql, (err: any, result: any) => {
      callback(err, result);
    });
  };
  export {getAllHelp}