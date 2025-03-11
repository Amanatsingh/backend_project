import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

//configuring cors(Middlewares)
app.use(cors({                 
    origin: process.env.CORS_ORIGIN,             //kis kis jagah se request aygi
    credentials: true,
}))    

app.use(express.json({limit: "16kb"}))     
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))       
app.use(cookieParser())


<<<<<<< HEAD
//routes
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)

//  http://localhost:8000/api/v1/users/register
=======
>>>>>>> ed8a106c2e0e37e41ac017fb9fe64c4204e25267


export {app}