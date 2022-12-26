const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../models/users");
router.use(bodyParser.json());

router.get("/students", async (req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json({
            status : "success",
            data: users
        })
    }catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
});


router.get("/students/:id", async (req, res)=>{
    try{
        const users = await User.find({_id: req.params.id});
        res.status(200).json({
            status : "success",
            data: users
        })
    }catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
});


router.post("/students", async (req, res)=>{
    try{
        const users = await User.create(req.body);
        res.status(200).json({
            status : "success",
            users
        })
    }catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
});

router.put("/students/:id", async (req, res)=>{
    try{
        const users = await User.findOneAndUpdate({_id : req.params.id}, req.body);
        res.status(200).json({
            status : "success",
            users
        })
    }catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
});

router.delete("/students/:id", async (req, res)=>{
    try{
        const users = await User.deleteOne({_id : req.params.id});
        res.status(200).json({
            status : "success",
            users
        })
    }catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
});

router.get("*", (req,res)=>{
    res.status(404).json({
        status : "failed",
        message : "invalid request"
    })
});

module.exports = router;
