import database from "../connect.js"


const QUERY = {
    getUserInfo: "SELECT * FROM Users WHERE USERNAME = ? AND PASSWORD = ?",
    register: "INSERT INTO Users (username, password, email, user_type) VALUES( ?, ?, ?, 'regular')",
    getUserIDByUserName:"SELECT user_id FROM Users WHERE username =? ",
    getUserByUserID:"SELECT * FROM Users WHERE user_id =? "
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

export const getUserByUserID =(user_id)=> new Promise((resolve,reject)=>{
  database.query(QUERY.getUserByUserID, [user_id], (error, result) => {
      if (error) {
        reject({
          sucess: false,
          message: 'user not found',
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