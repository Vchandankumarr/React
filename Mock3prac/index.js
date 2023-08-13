const express=require("express")
require("dotenv").config()
const app=express()


const {connection}=require("./configs/db")

// ROuters

const {Userrouter}=require("./routees/Userrouter")
const {NotesRouter}=require("./routees/Notes.router")


app.use(express.json())


app.get("/",(req,res)=>{
    res.send("HOme Page")
})


app.use("/users",Userrouter)
app.use("/notes", NotesRouter)





app.listen(process.env.port,async()=>{
try {
    await connection
    console.log("connected to data base")
    console.log(`server is running in port :- ${process.env.port}`)
} catch (error) {
    console.log(error)
}

})


