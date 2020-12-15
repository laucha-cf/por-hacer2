const fs = require(`fs`);

let listaPorHacer = [];
const filePath = `db/data.json`;


let saveDB = () => {
    let data = JSON.stringify(listaPorHacer);

    fs.writeFile(filePath, data, (err) => {
        if (err) {
            throw new Error(`No se ha podido guardar la data`, err);
        }
    })
}

let loadDB = () => {

    try {

        listaPorHacer = require(`../db/data.json`);

    } catch (error) {

        listaPorHacer = [];

    }
}


let crear = (descripcion) => {
    loadDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listaPorHacer.push(porHacer);

    saveDB();

    return porHacer;
}

let getLista = () => {
    loadDB();

    return listaPorHacer;
}


let actualizar = (descripcion, completado = true) => {
    loadDB();

    let index = listaPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })


    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        saveDB();
        return `Se actualizó correctamente`;
    } else {
        return `No se pudo actualizar`;
    }

}

let borrar = (descripcion) => {
    loadDB();

    let index = listaPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listaPorHacer.pop(index);
        saveDB();
        return `Eliminado correctamente`;
    } else {
        return `El elemento a eliminar no existe`;
    }
}

module.exports = {
    crear,
    actualizar,
    getLista,
    borrar
};