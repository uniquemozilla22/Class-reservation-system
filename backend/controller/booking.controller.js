import { insertIntoBookings } from "../database/Querys/booking.js";
import { getRoomByName } from "../database/Querys/classes.js";
import { getEventByEventDescription } from "../database/Querys/event.js";



export const createBooking = async (data)=>{
    try{
        const {user_id,date,
            end_time,
            events,
            room_number,
            start_time, } = data;
    
        let event_id =await  getEventByEventDescription(events)
        let room_id = await getRoomByName(room_number)
        if(room_id.data.availability != "available"){
            return {success:false , message: "This room is not available "}
        }
        console.log(event_id,room_id)
        event_id = event_id.data[0].event_id
        room_id = room_id.data.room_id
        const insertResponse = await  insertIntoBookings([user_id,room_id,date,start_time,end_time, event_id, events])
        return insertResponse
    }
    catch(error){
        console.log(error)
        return error
    }
   
}



// export const updateBooking = 