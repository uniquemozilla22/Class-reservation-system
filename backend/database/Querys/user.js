import database from "../connect.js"


const QUERY = {
    getUserInfo: "SELECT * FROM USERS WHERE USERNAME = ? AND PASSWORD = ?",
    register: "INSERT INTO USERS VALUES(?, ?, ?, ?, ?)",
    getUserIDByUserName:"SELECT user_id FROM USERS WHERE username =? "
};


export const getUserIDByUserName =(username)=> new Promise((resolve,reject)=>{
  database.query(QUERY.getUserIDByUserName, [username], (error, result) => {
      if (error) {
        reject({
          sucess: false,
          message: 'UserName not found',
          data: error,
        });
      }
      resolve({
        sucess: true,
        message: 'User found',
        data: result,
      });
    });
})


export const getUserInfo =(username, password)=> new Promise((resolve,reject)=>{
    database.query(QUERY.getUserInfo, [username, password], (error, result) => {
        if (error) {
          reject({
            sucess: false,
            message: 'nope',
            data: error,
          });
        }
        resolve({
          sucess: true,
          message: 'yes',
          data: result,
        });
      });
  })

  export const register =(data)=> new Promise((resolve,reject)=>{
    database.query(QUERY.register, [...data], (error, result) => {
        if (error) {
          reject({
            sucess: false,
            message: 'nope',
            data: error,
          });
        }
        resolve({
          sucess: true,
          message: 'yes',
          data: result,
        });
      });
  })

export default QUERY;