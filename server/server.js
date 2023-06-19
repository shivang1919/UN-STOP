const app = require("./app")
const dotenv=require("dotenv")
const { connectDB } = require("./config/database")
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