import database from "../database/connect.js"

export const getAllClasses = () => new Promise((resolve, reject)=>{
    database.query("SELECT * FROM Room",(error, result) =>{
        if(error){
            reject({sucess:false , data:error})
        }
        resolve({sucess:true, data:result})
    });
})





