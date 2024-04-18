import database from "../connect.js";


const QUERY = {
    getCampusIDByName: "SELECT campus_id FROM Campus WHERE campus_name = ?",
    getCampusAll: "SELECT * FROM Campus;",
}

export const fetchALLCampus = () => new Promise((resolve,reject)=>{
    database.query(QUERY.getCampusAll, (error, result) => {
        if (error) {
          reject({
            sucess: false,
            message: "Fetching from the Building error ",
            data: error,
          });
        }
        resolve({
          sucess: true,
          message: "Fetching from the Building success ",
          data: result,
        });
      });
})

export const getCampusIDByName = (campusName) =>
  new Promise((resolve, reject) => {
    database.query(
      QUERY.getCampusIDByName,
      [campusName],
      (error, result) => {
        if (error) {
          reject({
            sucess: false,
            message: "Fetching from the building name error ",
            data: error,
          });
        }
        resolve({
          sucess: true,
          message: "Fetching from the building name success ",
          data: result[0],
        });
      }
    );
  });

export default QUERY