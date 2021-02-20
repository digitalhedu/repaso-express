const dbtask = require("../database/models/task");
const dbuser = require("../database/models/user");
const dbstate = require("../database/models/state");

module.exports = {
    index: (req,res) => {

        // Todas las tareas del JSON de Tareas 

        let allTask = dbtask.list();

        // Actualizamos las tareas de la variable anterior para obtener los usuarios de cada tarea

        let allTaskUser = allTask.map( (t) => Object({...t,user:dbuser.one(t.user)}))
        
        // Actualizamos las tareas de la variable anterior para obtener los estados de cada tarea

        let allTaskUserState = allTaskUser.map( (t) => Object({...t,state:dbstate.one(t.state)}))
        
        let styles = ["master","home"];

        let title = "Home";
        // Devolvemos un JSON al usuario con todos los datos
        return res.render("index",{tasks:allTaskUserState,styles,title});
    }
}