import { Router } from "express";
import { fetchAllEvents } from '../database/Querys/event.js';

const EventRouter = Router();

EventRouter.get("/", async (req, res) => {
  try {
    const data = await fetchAllEvents();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

// BookingRouter.post("/", authorizeAdmin,  async (req,res)=>{
//   try{
//     const {building_name , campus_name} = req.body
//     const data = await createABuilding(building_name , campus_name)
//     console.log(data)
//     res.send(data)
//   }
//   catch(error) {
//     res.send(error)
//   }
// })

// BookingRouter.put("/", authorizeAdmin, async (req,res)=>{
//   try{
//     const {building_name ,data} = req.body
//     const response = await updateABuilding(building_name ,data)
//     res.send(response)
//   }
//   catch(error) {
//     res.send(error)
//   }
// })

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


export default EventRouter;
