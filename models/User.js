const mongoose = require ('mongoose');
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
    email: String,
    Address: String

  });
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;