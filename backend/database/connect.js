

import mysql from 'mysql2'
import logger from '../utils/logger.js'


const database = mysql.createConnection({
    host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

database.connect((error)=>{
    if(error){
        logger.error(`Database Connection error : ${ error.message } ${JSON.stringify(error)}`, )
        return;
    }
    else{
        logger.info(`Database Connection Successfull `)
    }
})


export default database


