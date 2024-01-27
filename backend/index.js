import  express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send({message:"Application API is running "})
})


app.listen(8080, ()=> console.log("Application is running on http://localhost:8080"))