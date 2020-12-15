const descripcion = {
    demand: true,
    alias: `d`,
    desc: `Descripcion de la tarea por hacer`
};

const completado = {
    default: false,
    alias: `c`,
    desc: `Completado o pendiente`
};


const argv = require(`yargs`)
    .command(`crear`, `Crea una nueva tarea`, { descripcion })
    .command(`borrar`, `Borra una tarea`, { descripcion })
    .command(`actualizar`, `Actualiza el estado de una tarea`, { descripcion, completado })
    .help()
    .argv;

module.exports = {
    argv
};