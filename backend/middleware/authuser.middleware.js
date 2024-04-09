import { getUserByUserID } from "../database/Querys/user.js"


export const authorizeUser = async (req, res, next) =>{
    try{
        const user_id = req.headers["authorization"]
        if(user_id === undefined || user_id===""){
            res.send({success:false , message:"Not Authorized to use this feature", data:null})
            return;
        }
        const user =  await getUserByUserID(user_id);
        req.user = user.data[0]
        next()
    }catch(error)
    {
        console.log(error)
        res.send(error)
        return
    }
}




export const authorizeAdmin =(req, res, next) =>{
    const {user_type}  = req.user
    console.log(req.user)
    if(user_type!=="admin"){
        res.send({success:false , message:"Not Authorized to use this feature Admin feature", data:null})
        return;
    }
    next()
}