import { Router } from "express";
import { createAClass, getAllClasses } from "../controller/class.controller.js";
import logger from "../utils/logger.js";

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
    res.send(data)
  }
  catch(error) {
    res.send(error)
  }
})

export default ClassRouter;
