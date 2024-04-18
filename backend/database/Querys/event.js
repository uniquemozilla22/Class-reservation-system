import database from "../connect.js";

const QUERY = {
    fetchAllEvents:"SELECT * FROM Event",
    getEventByDescription:"SELECT * from Event WHERE description=?"
}

export const fetchAllEvents = () => new Promise((resolve,reject)=>{
    database.query(QUERY.fetchAllEvents, (error, result) => {
        if (error) {
          reject({
            sucess: false,
            message: "Fetching from the events error ",
            data: error,
          });
        }
        resolve({
          sucess: true,
          message: "Fetching from the events success ",
          data: result,
        });
      });
})

export const getEventByEventDescription = (event) => new Promise((resolve,reject)=>{
  database.query(QUERY.getEventByDescription,[event] ,(error, result) => {
      if (error) {
        reject({
          sucess: false,
          message: "Fetching from the events desciption error ",
          data: error,
        });
      }
      resolve({
        sucess: true,
        message: "Fetching from the events desciption success ",
        data: result,
      });
    });
})




