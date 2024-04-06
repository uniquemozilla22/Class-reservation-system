import  { fetchAllClasses, getBuildingByName, getCampusByName, getRoomByName, insertIntoRoomWithBuildingIDAndCampusID } from "../database/Querys/index.js";

export const getAllClasses = async ()=>{
    const response  =await fetchAllClasses()
    return response
}

export const createAClass = async ({room_number, capacity, available ="available", building_name}) =>{
    const buildingRes  = await getBuildingByName(building_name)
    const building_id  = buildingRes.data.building_id 
    const response = await insertIntoRoomWithBuildingIDAndCampusID([room_number, capacity, available, building_id])
    const {data} = await getRoomByName(room_number)
    return {...response, data}
}






