
const express=require("express")

const {Authentication}=require("../middlewares/Authentication")


const NotesRouter=express.Router()

NotesRouter.get("/",Authentication,(req,res)=>{
    userid=req.body
    res.send({res:"NOotes router",userid})
})


module.exports={
    NotesRouter
}