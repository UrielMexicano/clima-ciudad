const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);


//Una función async siempre regresa una promesa
// lugar.getlugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch();

// clima.getClima(19.48, -99.27)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getlugarLatLng(direccion);
        const tempeture = await clima.getClima(coords.lat, coords.lng);
        return `El clima en ${coords.direccion} es de ${tempeture} ºC`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);