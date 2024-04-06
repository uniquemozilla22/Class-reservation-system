import { Router } from "express";
import { createAClass, deleteAClass, getAllClasses, updateAClass } from "../controller/class.controller.js";
import { deleteRoomByRoomNumber, getRoomByName, updateRoomByRoomNumber } from "../database/Querys/classes.js";

const ClassRouter = Router();

ClassRouter.get("/", async (req, res) => {
  try {
    const data = await getAllClasses();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

ClassRouter.post("/", async (req,res)=>{
  try{
    const {building_name , campus_name , capacity , room_number} = req.body
    const data = await createAClass({building_name , campus_name , capacity , room_number})
    console.log(data)
    res.send(data)
  }
  catch(error) {
    res.send(error)
  }
})

ClassRouter.put("/", async (req,res)=>{
  try{
    const {room_number ,data} = req.body
    const response = await updateAClass(room_number ,data)
    res.send(response)
  }
  catch(error) {
    res.send(error)
  }
})

ClassRouter.delete("/", async (req,res)=>{
  try{
    const {room_number} = req.body
    let response = await deleteAClass(room_number )
    res.send(response)
  }
  catch(error) {
    res.send(error)
  }
})


export default ClassRouter;
