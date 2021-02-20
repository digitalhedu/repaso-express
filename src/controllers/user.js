const dbtask = require("../database/models/task");
const dbuser = require("../database/models/user");
const dbstate = require("../database/models/state");
const dbrol = require("../database/models/rol");
module.exports = {
    login: (req,res) => res.send("Login User"),
    register: (req,res) => res.send("Register User"),
    save: (req,res) => res.send("Save User"),
    logout: (req,res) => res.send("Logout User"),
    profile: (req,res) => res.send("Profile User"),
    edit: (req,res) => res.send("Edit Profile User"),
    update: (req,res) => res.send("Update Data User"),
    disable: (req,res) => res.send("Disable User"),
}