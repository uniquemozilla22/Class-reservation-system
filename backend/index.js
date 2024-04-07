import  express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import logger, { HTTPLogger } from './utils/logger.js'
import ClassRouter from './Routes/classes.route.js'
import BuildingRouter from './Routes/building.route.js'
import CampusRouter from './Routes/campus.route.js'

const app = express()

app.use(cors())
app.use(express.json())
app.set('trust proxy', true);

import("./database/connect.js")

app.get("/",(req,res)=>{
    res.send({message:"Application API is running "})
})


app.use("/classes", HTTPLogger(ClassRouter))
app.use("/building", HTTPLogger(BuildingRouter))
app.use("/campus", HTTPLogger(CampusRouter))


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
