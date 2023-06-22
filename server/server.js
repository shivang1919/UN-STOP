const dotenv=require("dotenv")
const { connectDB } = require("./config/database")
const express= require("express")
const app = express()
const errorMiddleware = require("./middleware/error")
const cookieParser = require("cookie-parser")
app.use(express.json())
app.use(cookieParser())

// Route imports
app.use(cors())
const product = require("./routes/ProductRoute")
const user = require("./routes/userRoute")
const order = require("./routes/orderRoute")

app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)

// Middlewares for error
app.use(errorMiddleware)




// handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`)
    console.log(`Shutting down server to uncaught Exception`)
    process.exit(1);
})

//  config
dotenv.config({path:"config/config.env"})

connectDB()

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error ${err.message}`)
    console.log(`Shutting down the server due to unhandler promise rejection`)
    server.close(()=>{
        process.exit(1)
    })
})