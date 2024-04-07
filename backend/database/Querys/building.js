import database from "../connect.js";


const QUERY = {
    fetchALLBuilding:"SELECT *  FROM building JOIN campus ON building.campus_id = campus.campus_id",
    getBuildingByName: "SELECT * FROM building JOIN campus ON building.campus_id = campus.campus_id WHERE building_name = ?",
    insertIntoBuldingByCampusID :"INSERT INTO building(building_name, campus_id) VALUES(?,?)",
    updateBuldingByName: (updateName) =>`UPDATE building SET ${updateName} = ? WHERE building_name = ?`,
    deleteBuildingByName: `DELETE FROM building WHERE building_name =?`
}


export const fetchALLBuilding = () => new Promise((resolve,reject)=>{
    database.query(QUERY.fetchALLBuilding, (error, result) => {
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

export const getBuildingIDByName = (building_name) =>
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

  export const insertIntoBuldingWithCampusID =(data)=> new Promise((resolve,reject)=>{
    database.query(QUERY.insertIntoBuldingByCampusID, [...data], (error, result) => {
        if (error) {
          reject({
            sucess: false,
            message: "Inserting into the building error ",
            data: error,
          });
        }
        resolve({
          sucess: true,
          message: "Inserting into the building success",
          data: result,
        });
      });
  })


  export const getBuildingByName =(bulding_name)=> new Promise((resolve,reject)=>{
    database.query(QUERY.getBuildingByName, [bulding_name], (error, result) => {
        if (error) {
          reject({
            sucess: false,
            message: `Getting into the building ${bulding_name} error `,
            data: error,
          });
        }
        resolve({
          sucess: true,
          message: `Getting into the building ${bulding_name} success `,
          data: result,
        });
      });
  })


  export const updateBuildingByBuildingName = (building_name, data) =>
  new Promise((resolve, reject) => {
    let response;
    Object.keys(data).map((updatingFeild) => {
      database.query(
        QUERY.updateBuldingByName(updatingFeild),
        [data[updatingFeild], building_name],
        (error) => {
          if (error) {
            reject({
              sucess: false,
              message: `Updaing the building by name error on ${{
                updaingFeild: data[updatingFeild],
              }}`,
              data: error,
            });
          }
        }
      );
    });
    resolve({sucess: true,
        message: "Updaing the building by name success ",
        data:response})
  });


  export const deleteBuildingByName = (building_name) =>
  new Promise((resolve, reject) => {
    database.query(QUERY.deleteBuildingByName, [building_name], (error, result) => {
      if (error) {
        reject({
          sucess: false,
          message: `Deleting the building by name ${building_name} error`,
          data: error,
        });
      }
      resolve({
        sucess: true,
        message: `Deleting the building by name ${building_name} success`,
        data: result,
      });
    });
  });

export default QUERY