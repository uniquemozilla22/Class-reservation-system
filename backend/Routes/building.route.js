import { Router } from "express";
import { createABuilding, deleteABuilding, getAllBuldings, updateABuilding } from "../controller/building.controller.js";
import { authorizeAdmin } from "../middleware/authuser.middleware.js";

const BuildingRouter = Router();

BuildingRouter.get("/", async (req, res) => {
  try {
    const data = await getAllBuldings();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

BuildingRouter.post("/", authorizeAdmin,  async (req,res)=>{
  try{
    const {building_name , campus_name} = req.body
    const data = await createABuilding(building_name , campus_name)
    console.log(data)
    res.send(data)
  }
  catch(error) {
    res.send(error)
  }
})

BuildingRouter.put("/", authorizeAdmin, async (req,res)=>{
  try{
    const {building_name ,data} = req.body
    const response = await updateABuilding(building_name ,data)
    res.send(response)
  }
  catch(error) {
    res.send(error)
  }
})

BuildingRouter.post("/delete", authorizeAdmin, async (req,res)=>{
  try{
    console.log()
    const building_name = req.body.building_name
    console.log(building_name)
    let response = await deleteABuilding(building_name)
    res.send(response)
  }
  catch(error) {
    res.send({error})
  }
})


export default BuildingRouter;
