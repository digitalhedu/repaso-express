const fs = require("fs");
const path = require("path");
const states = {
    list: () => {
        // RUTA DEL ARCHIVO JSON
        const file = path.resolve(__dirname,"../states.json")
        // LEEMOS EL ARCHIVO
        const data = fs.readFileSync(file,"utf-8")
        // COVERTIMOS JSON a ARRAY
        return JSON.parse(data)
    },
    one: (id) => {
        // RUTA DEL ARCHIVO JSON
        const file = path.resolve(__dirname,"../states.json")
        // LEEMOS EL ARCHIVO
        const data = fs.readFileSync(file,"utf-8")
        // COVERTIMOS JSON a ARRAY
        const info = JSON.parse(data)
        // BUCAMOS POR EL PARAMETRO ID 
        return info.find( x => x.id == id);
    },
    write: (data) =>{
        // RUTA DEL ARCHIVO JSON
        const file = path.resolve(__dirname,"../states.json")
        // COVERTIMOS ARRAY a JSON
        const info = JSON.stringify(data,null,4)
        // ESCRIBIMOS DATOS EN EL JSON
        fs.writeFileSync(file,info);
    } 
}

module.exports = states;