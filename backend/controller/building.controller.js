import { deleteBuildingByName, fetchALLBuilding, getBuildingByName, getBuildingIDByName, insertIntoBuldingWithCampusID, updateBuildingByBuildingName } from "../database/Querys/building.js";
import { getCampusIDByName } from "../database/Querys/campus.js";


export const getAllBuldings =async () =>{
    const data = await fetchALLBuilding();
    return data
}

export const createABuilding = async (building_name, campus_name) =>{
    try{
        const building = await getBuildingByName(building_name)
        if(building.data && building.data.length !== 0){
            const roomData = {success:false , message:`There is already that building name registered on ${room.data.campus_name}`, data:room.data}
            console.log(roomData)
            return roomData
        }
        const campusRes  = await getCampusIDByName(campus_name)
        const campus_id  = campusRes.data.campus_id 
        const response = await insertIntoBuldingWithCampusID([building_name, campus_id])
        const {data} = await getBuildingByName(building_name)
        return {...response, data}
    }
    catch(error){
        return error
    }
}

export const updateABuilding = async (building_name, data) =>{
    let response = await updateBuildingByBuildingName(building_name ,data)
    let getUpdatedRoom = await getBuildingByName(building_name)
    response.data = getUpdatedRoom.data
    return response
}

export const deleteABuilding = async  (building_name)=>{
    try{
        let response = await deleteBuildingByName(building_name )
        return response
    }
    catch(error){
        console.log("error",error)
        return error
    }
}