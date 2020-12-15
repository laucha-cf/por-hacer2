const argv = require(`./config/yargs`).argv;
const porHacer = require(`./por-hacer/por-hacer`);

let comando = argv._[0];

switch (comando) {
    case `crear`:
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case `borrar`:
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);

        break;
    case `listar`:
        let listar = porHacer.getLista();
        console.log(`LISTA`);
        for (let tarea of listar) {
            console.log(`==========`);
            console.log(tarea.descripcion);
            console.log(`Estado: `, tarea.completado);
            console.log(`==========`);
        }

        break;

    case `listarPendientes`:
        let listarP = porHacer.getLista();
        console.log(`LISTA PENDIENTES`);
        for (let tarea of listarP) {
            if (tarea.completado == false) {
                console.log(`==========`);
                console.log(tarea.descripcion);
                console.log(`Estado: `, tarea.completado);
                console.log(`==========`);
            }
        }

        break;
    case `actualizar`:
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;
    default:
        console.log(`No es un comando valido`);
}