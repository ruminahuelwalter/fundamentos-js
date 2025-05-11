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

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log('Nueva longitud:', nuevaLongitud);


let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let pos =  1;

let juegosBorrados = juegos.splice(pos, 2);
console.log({juegoBorrado, juegos})