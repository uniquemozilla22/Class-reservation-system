import QUERY from "../database/Querys/index.js";
import database from "../database/connect.js"

export const getAllClasses = () => new Promise((resolve, reject)=>{
    database.query(QUERY.getRoom,(error, result) =>{
        if(error){
            reject({sucess:false ,message:"Fetching from the room error ", data:error})
        }
        resolve({sucess:true,message:"Fetching from the room success ", data:result})
    });
})



export const bookAClass = () =>{
    
}



