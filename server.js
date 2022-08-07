
//Namespace import or package for express
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const ArticleRoute=require("./routes/article");

//object creations
const app = express();

//API Configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to MONGODB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MONGO DB Successfully")
}).catch((error) => {
    console.log(`Error conecting to MONGO DB ${error.message}`)
})

//services and endpoint
app.get("/", (req, res) => {
    res.send("API is running Successfully");
})

//article endpoint
app.use("/api/article",ArticleRoute);

//Enable Port
const PORT = process.env.PORT || 1212

//start Server
app.listen(PORT, () => {
    console.log(`Server started with port ${PORT}`);
})


