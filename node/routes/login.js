const express =  require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const {body, validationResult} = require('express-validator');
const User = require("../models/users")
router.use(bodyParser.json());


router.post("/register", body('email').isEmail(), body('name').isAlpha(), body('password').isLength({min:6,max:16}), body('address').isAlphanumeric(), async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        });
    }
    const {email} = req.body;
    let user = await User.findOne({email});
    if(user){
        return res.status(401).json({
            status : "not okay",
            message : "email already exists"
        });
    }
    user = await User.create(req.body);
    res.json({
        "status" : "success",
        user
    });
})

module.exports = router
