const express = require("express");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/studentapi');
const loginRoutes = require("./routes/login")
const userRoutes = require("./routes/user")
const classRoutes = require("./routes/class")
const app = express();
app.use("/api/v1",loginRoutes);
app.use("/api/v1",userRoutes);
app.use("/api/v1", classRoutes)
app.get("/", (req,res)=>{
    res.send("okay");
})

app.listen(5001, ()=>{
    console.log("server running at port number 5001 ");
})
