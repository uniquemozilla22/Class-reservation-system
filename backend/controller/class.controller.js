import {  getBuildingIDByName } from "../database/Querys/building.js";
import  { deleteRoomByRoomNumber, fetchAllClasses, getRoomByName, insertIntoRoomWithBuildingIDAndCampusID, updateRoomByRoomNumber } from "../database/Querys/classes.js";

export const getAllClasses = async ()=>{
    const response  =await fetchAllClasses()
    return response
}

export const createAClass = async ({room_number, capacity, available ="available", building_name}) =>{
    try{
        const room = await getRoomByName(room_number)
        if(room.data && room.data.length !== 0){
            const roomData = {success:false , message:`There is already that room number registered on ${room.data.building_name} within ${room.data.campus_name}`, data:room.data}
            console.log(roomData)
            return roomData
        }
        const buildingRes  = await getBuildingIDByName(building_name)
        const building_id  = buildingRes.data.building_id 
        const response = await insertIntoRoomWithBuildingIDAndCampusID([room_number, capacity, available, building_id])
        const {data} = await getRoomByName(room_number)
        return {...response, data}
    }
    catch(error){
        return error
    }
}


export const updateAClass = async (room_number ,data) =>{
    let response = await updateRoomByRoomNumber(room_number ,data)
    let getUpdatedRoom = await getRoomByName(room_number)
    response.data = getUpdatedRoom.data
    return response
}

export const deleteAClass = async (room_number ) =>{
    let response = await deleteRoomByRoomNumber(room_number )
    return response
}


