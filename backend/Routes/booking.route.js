import { Router } from "express";
import { fetchAllBookings, updateBooking } from "../database/Querys/booking.js";
import { createBooking } from "../controller/booking.controller.js";
import { authorizeAdmin } from "../middleware/authuser.middleware.js";
import { getRoomByName } from "../database/Querys/classes.js";

const BookingRouter = Router();

BookingRouter.get("/", async (req, res) => {
  try {
    const data = await fetchAllBookings();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

BookingRouter.post("/",  async (req,res)=>{
  try{
    const {date,
        end_time,
        events,
        room_number,
        start_time}= req.body
        const {user_id} =  req.user
    const data = await createBooking({date,
        end_time,
        events,
        room_number,
        start_time,
        user_id,
    })
    res.send(data)
  }
  catch(error) {
    console.log(error)
    res.send(error)
  }
})

BookingRouter.put("/", authorizeAdmin, async (req,res)=>{
  try{
    const {room_number ,data} = req.body
    const roomID = await getRoomByName(room_number)
    const response = await updateBooking(roomID ,data)
    res.send(response)
  }
  catch(error) {
    res.send(error)
  }
})

// BookingRouter.post("/delete", authorizeAdmin, async (req,res)=>{
//   try{
//     console.log()
//     const building_name = req.body.building_name
//     console.log(building_name)
//     let response = await deleteABuilding(building_name)
//     res.send(response)
//   }
//   catch(error) {
//     res.send({error})
//   }
// })


export default BookingRouter;
