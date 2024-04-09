import {Router} from "express";
import { validateUser, registerNewUser } from "../controller/user.controller.js";

const UserRouter = Router();

UserRouter.get("/validateUser", async (req, res) => {
    console.log("In validate USer API")
    console.log(req)
try{
    const {username, password} = req.body
    let response = await validateUser(username, password);
    res.send(response);
}catch(error){
   res.send(error);   
}  
});

UserRouter.post("/registerNewUser", async (req, res) => {
    console.log("In Register USer API")
  

try{
    const {username, password, email, user_type} = req.body
    let response = await registerNewUser({username, password, email});
    res.send(response);
}catch(error){
   res.send(error);   
}  
});

export default UserRouter;