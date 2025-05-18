
let a = 10;
let b = a;
a= 30;

console.log( {a,b} );
let juan = { nombre: 'Juan' };
// Operador spread
let ana = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

// parámetro rest
const cambiarNombre = ( { ...persona } ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiarNombre( peter );

// Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.timeEnd('spread');
const otrasFrutas2 = [ ...frutas ];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });