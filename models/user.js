const mongoose = require("mongoose"), // getting mongoose
Schema = mongoose.Schema, // getting schema 
userSchema = new Schema({
  firstName: {type: String,required: true,minlength: 3},
  lastName: {type: String,required: true,minlength: 3}
},{timestamps: true}), // creating a new schema
User = mongoose.model("User",userSchema); // creating model
module.exports = User;
