import database from "../connect.js"


const QUERY = {
    getUserInfo: "SELECT * FROM USERS WHERE USERNAME = ? AND PASSWORD = ?"
}

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

export default QUERY;