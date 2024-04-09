import database from "../connect.js"


const QUERY = {
    getUserInfo: "SELECT * FROM USERS WHERE USERNAME = ? AND PASSWORD = ?",
    register: "INSERT INTO USERS (username, password, email, user_type) VALUES( ?, ?, ?, 'regular')",
};

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