const mongoose = require("mongoose");

//create users schema
const UsersSchema = mongoose.Schema({
    email: String,
    password: String,
    LoggedIn:String
});

const UserModel = mongoose.model("users", UsersSchema);

module.exports = UserModel;