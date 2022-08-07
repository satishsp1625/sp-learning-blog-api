
//Namespace import or package for express
const express = require("express");

//object creations
const app=express();

//API Configurations
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//services and endpoint
app.get("/",(req,res)=>{
    res.send("API is running Successfully");
})

//Enable Port
const PORT=process.env.PORT||1212

//start Server
app.listen(PORT,()=>{
    console.log(`Server started with port ${PORT}`);
})


