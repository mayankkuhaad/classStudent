const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const classSchema = new Schema({
    standard: {type: String, required: true},
    id : {type : Number, required:true},
    studentsCount: {type: Number, unique: true}  
})

const classModel = mongoose.model("Standard", classSchema);
module.exports = classModel;


// const classSchema = new Schema({
//     classes: [
//         {
//           id: String,
//           class: String,
//           studentCount: Number,
//         }
//       ],
//       User: { type: Schema.Types.ObjectId, ref: "user" },
//     });
  
//   module.exports = mongoose.model("Standard", classSchema);
  