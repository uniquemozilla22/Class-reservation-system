import {Router} from "express";
import { validateUser } from "../controller/user.controller.js";

const UserRouter = Router();

UserRouter.get("/validateUser", async (req, res) => {
    console.log("In")
try{
    const {username, password} = req.body
    let response = await validateUser(username, password);
    res.send(response);
}catch(error){
   res.send(error);   
}  
});

export default UserRouter;