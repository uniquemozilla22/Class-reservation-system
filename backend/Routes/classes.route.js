import { Router } from "express";
import { createAClass, deleteAClass, getAllClasses, updateAClass } from "../controller/class.controller.js";
import { authorizeAdmin } from "../middleware/authuser.middleware.js";

const ClassRouter = Router();

ClassRouter.get("/", async (req, res) => {
  try {
    const data = await getAllClasses();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

ClassRouter.post("/", authorizeAdmin, async (req,res)=>{
  try{
    let {building_name , campus_name , capacity , room_number} = req.body
    capacity = parseInt(capacity)
    console.log(capacity)
    const data = await createAClass({building_name , campus_name , capacity , room_number})
    console.log(data)
    res.send(data)
  }
  catch(error) {
    res.send(error)
  }
})

ClassRouter.put("/", authorizeAdmin, async (req,res)=>{
  try{
    const {room_number ,data} = req.body
    const response = await updateAClass(room_number ,data)
    res.send(response)
  }
  catch(error) {
    res.send(error)
  }
})

ClassRouter.post("/delete", authorizeAdmin, async (req,res)=>{
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
