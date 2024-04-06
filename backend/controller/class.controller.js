import  { fetchAllClasses, getBuildingByName, getRoomByName, insertIntoRoomWithBuildingIDAndCampusID } from "../database/Querys/index.js";

export const getAllClasses = async ()=>{
    const response  =await fetchAllClasses()
    return response
}

export const createAClass = async ({room_number, capacity, available ="available", building_name}) =>{
    try{
        const room = await getRoomByName(room_number)
        console.log(room.data.length)
        if(room.data.length !== 0){
            const roomData = {success:false , message:`There is already that room number registered on ${room.data.building_name} within ${room.data.campus_name}`, data:room.data}
            console.log(roomData)
            return roomData
        }
        const buildingRes  = await getBuildingByName(building_name)
        const building_id  = buildingRes.data.building_id 
        const response = await insertIntoRoomWithBuildingIDAndCampusID([room_number, capacity, available, building_id])
        const {data} = await getRoomByName(room_number)
        return {...response, data}
    }
    catch(error){
        return error
    }
}






