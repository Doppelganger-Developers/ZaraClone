import { OkPacket } from 'mysql2/promise';
const connectio=require("../config.ts")

const postOneUser = async (user: any): Promise<OkPacket> => {
  const sql = `INSERT INTO user SET ?`;
  return new Promise((resolve, reject) => {
    connectio.query(sql, user, (err:any, result:any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getOneUser=async (useremail: String)=>{
    const sql=`SELECT * FROM user where useremail="${useremail}"`
    return new Promise((resolve, reject) => {
        connectio.query(sql,(err:any, result:any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      })
}


module.exports={postOneUser,getOneUser}