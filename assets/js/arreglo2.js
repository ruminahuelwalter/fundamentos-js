let juegos = ['Zelda', 'Mario', 'Metroid'];
console.log('Largo', juegos.length)


let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1 ];

console.log({ primero, ultimo })


juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr});
});

let nuevaLongitud = juegos.push( 'F-Zero ');

console.log('Nueva longitud:', nuevaLongitud);

