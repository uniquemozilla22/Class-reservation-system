import { Router } from "express";
import { getAllClasses } from "../controller/class.controller.js";

const ClassRouter = Router();

ClassRouter.get("/", async (req, res) => {
  try {
    const data = await getAllClasses();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

export default ClassRouter;
