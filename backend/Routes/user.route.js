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
    const {user_id, username, password, email, user_type} = req.body
    let response = await registerNewUser({user_id, username, password, email, user_type});
    res.send(response);
}catch(error){
   res.send(error);   
}  
});

export default UserRouter;