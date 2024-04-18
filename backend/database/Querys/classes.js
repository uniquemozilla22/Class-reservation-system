import database from "../connect.js";

const QUERY = {
  getRoom:
    "SELECT *  FROM Room JOIN Building ON Room.building_id = Building.building_id JOIN Campus ON Building.campus_id = Campus.campus_id",
  insertRoomData:
    "INSERT INTO Room(room_number, capacity, availability, building_id) VALUES(?,?,?,?)",
  getRoomByName:
    "SELECT * FROM Room  JOIN Building ON Room.building_id = Building.building_id JOIN Campus ON Building.campus_id = Campus.campus_id WHERE room_number = ?",
  updateRoomByID: (updateName) =>
    `UPDATE Room SET ${updateName} = ? WHERE room_number = ?`,
    deleteRoomByRoomName:`DELETE FROM Room WHERE room_number =?`
};
export const fetchAllClasses = () =>
  new Promise((resolve, reject) => {
    database.query(QUERY.getRoom, (error, result) => {
      if (error) {
        reject({
          sucess: false,
          message: "Fetching from the room error ",
          data: error,
        });
      }
      resolve({
        sucess: true,
        message: "Fetching from the room success ",
        data: result,
      });
    });
  });

export const getCampusByName = (campus_name) =>
  new Promise((resolve, reject) => {
    database.query(QUERY.getCampusByName, [campus_name], (error, result) => {
      if (error) {
        reject({
          sucess: false,
          message: "Fetching from the campus name error ",
          data: error,
        });
      }
      resolve({
        sucess: true,
        message: "Fetching from the campus name success ",
        data: result[0],
      });
    });
  });

export const insertIntoRoomWithBuildingIDAndCampusID = (data) =>
  new Promise((resolve, reject) => {
    database.query(QUERY.insertRoomData, [...data], (error, result) => {
      if (error) {
        reject({
          sucess: false,
          message: "Inserting into the room  error ",
          data: error,
        });
      }
      resolve({
        sucess: true,
        message: "Inserting into the room  success",
        data: result,
      });
    });
  });

export const getRoomByName = (room_name) =>
  new Promise((resolve, reject) => {
    database.query(QUERY.getRoomByName, [room_name], (error, result) => {
      if (error) {
        reject({
          sucess: false,
          message: "Getting  the room by id error ",
          data: error,
        });
      }
      resolve({
        sucess: true,
        message: "Getting the room by id success ",
        data: result[0],
      });
    });
  });

export const updateRoomByRoomNumber = (room_number, data) =>
  new Promise((resolve, reject) => {
    let response;
    Object.keys(data).map((updatingFeild) => {
      database.query(
        QUERY.updateRoomByID(updatingFeild),
        [data[updatingFeild], room_number],
        (error) => {
          if (error) {
            reject({
              sucess: false,
              message: `Updaing the room by id error on ${{
                updaingFeild: data[updatingFeild],
              }}`,
              data: error,
            });
          }
        }
      );
    });
    resolve({sucess: true,
        message: "Updaing the room by room number success ",
        data:response})
  });


  export const deleteRoomByRoomNumber = (room_number) =>
  new Promise((resolve, reject) => {
    database.query(QUERY.deleteRoomByRoomName, [room_number], (error, result) => {
      if (error) {
        reject({
          sucess: false,
          message: `Deleting the room by name ${room_number} error`,
          data: error,
        });
      }
      resolve({
        sucess: true,
        message: `Deleting the room by name ${room_number} success`,
        data: result,
      });
    });
  });

export default QUERY;
