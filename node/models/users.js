const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name : {type: String, required: true},
    classid: {type: String, unique: true},
    studentid: {type:String, unique:true}
})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
