import  express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import 'dotenv/config' 
import logger from './utils/logger.js'
import { useNavigate } from "react-router-dom";

const app = express()

app.use(cors())
app.use(express.json())
app.set('trust proxy', true);

import("./database/connect.js")

app.get("/",(req,res)=>{
    res.send({message:"Application API is running "})
})

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root12345",
  database: "university_reservation"
})

app.post("/validatePassword", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
  
  // const sql = "SELECT * from Users";
  const sql = "SELECT * from Users where username = ? and password = ?";
  
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    console.log(data);
    if(err) return res.json("Login Failed");
    return res.json(data);

  })
})

const server  = app.listen(8080, ()=> logger.info("Application is running on http://localhost:8080"))

const exitHandler = () => {
    if (server) {
      server.close(() => {
        logger.info("Server closed");
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
    logger.info("SIGTERM received");
    if (server) {
      server.close();
    }
  });
