const express =  require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const {body, validationResult} = require('express-validator');
const Standard = require("../models/class")
router.use(bodyParser.json());

router.post("/myClass",body('standard').isAlphanumeric(),body('id').isNumeric(),body('studentsCount').isNumeric() ,async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        });
    }
    const {standard, id, studentsCount} = req.body;
    let stand = await Standard.findOne({id});
    if(stand){
        return res.status(401).json({
            status: "not okay",
            msg : "class already exists"
        });
    }
    stand = await Standard.create(req.body);
    res.json({
        "status" : "success",
        stand
    });
})
module.exports = router