import database from "../connect.js";

const QUERY = {
  getRoom:
    "SELECT *  FROM room JOIN building ON room.building_id = building.building_id JOIN campus ON building.campus_id = campus.campus_id",
  getBuildingByName: "SELECT building_id FROM building WHERE building_name = ?",
  getCampusByName: "SELECT campus_id FROM campus WHERE campus_name = ?",
  insertRoomData:
    "INSERT INTO room(room_number, capacity, availability, building_id) VALUES(?,?,?,?)",
  getRoomByName:
    "SELECT * FROM room  JOIN building ON room.building_id = building.building_id JOIN campus ON building.campus_id = campus.campus_id WHERE room_number = ?",
  updateRoomByID: (updateName) =>
    `UPDATE room SET ${updateName} = ? WHERE room_number = ?`,
    deleteRoomByRoomName:`DELETE FROM room WHERE room_number =?`
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

export const getBuildingByName = (building_name) =>
  new Promise((resolve, reject) => {
    database.query(
      QUERY.getBuildingByName,
      [building_name],
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
    Object.keys(data).map((updatingFeild, index) => {
      database.query(
        QUERY.updateRoomByID(updatingFeild),
        [data[updatingFeild], room_number],
        (error, result) => {
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
