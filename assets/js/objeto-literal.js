
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10990, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log( {personaje});
console.log( 'Nombre', personaje.nombre);
console.log( 'Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. trajes: ', personaje.trajes.length);
console.log('Ultimo trajes: ', personaje.trajes[personaje.trajes.length - 1]);


const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última pelicula:', personaje['ultima-pelicula']);

// Más detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log(entriesPares);

// personaje = 123;

Object.freeze( personaje );
personaje.dinero =  100000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Argentina'
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( { propiedades, valores } );

