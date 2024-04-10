import { Router } from "express";
import { fetchALLCampus } from "../database/Querys/campus.js";

const CampusRouter = Router();

CampusRouter.get("/", async (req, res) => {
  try {
    const data = await fetchALLCampus();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});


export default CampusRouter