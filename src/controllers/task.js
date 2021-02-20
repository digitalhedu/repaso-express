const dbtask = require("../database/models/task");
const dbuser = require("../database/models/user");
const dbstate = require("../database/models/state");

module.exports = {
    show:(req,res) =>{
        
        let task = dbtask.one(req.params.id);

        task.state = dbstate.one(task.state);
        
        task.user = dbuser.one(task.user);

        return res.render("task/detail",{title:"Detalle",styles:["master","detail"],task})
    }, 
    create: (req,res) => res.render("task/create",{title:"Crear",styles:["master","create"],users:dbuser.list(),states: dbstate.list()}),
    save: (req,res) => {
        let allTask = dbtask.list();
        let lastId = allTask.lenght != 0 ? allTask[allTask.length-1].id : 0
        req.body.id = lastId + 1;
        allTask.push(req.body);
        dbtask.write(allTask);
        return res.redirect("/");
    },
    edit: (req,res) => res.send("Edit One Task"),
    update: (req,res) => res.send("Update Tasks"),
    delete: (req,res) => res.send("Delete One Task")
}    