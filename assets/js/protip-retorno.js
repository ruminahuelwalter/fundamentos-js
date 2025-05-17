

function crearPersona( nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

function crearPersona2( nombre, apellido){
    return {
        nombre,
        apellido
    }
}

//const crearPersona3 = ( nombre, apellido ) ({nombre, apellido})

//const persona = crearPersona3( 'Walter', 'Rumi')
//console.log(persona);

function imprimeArgumentos() {
    console.log( arguments );
}


const imprimeArgumentos2 = (edad, ...args ) => {{
    // parametro rest
    //console.log ({edad, args} );
    return args;
}}

const argumentos = imprimeArgumentos2(10, true, false, 'Hola');
const [ casado, vivo, saludo] = imprimeArgumentos2(10, true, false, 'Hola');
console.log({ argumentos });

const { apellido: nuevoApellido } = crearPersona('Walter', 'Rumi');
console.log({ nuevoApellido })


const tony = {
    nombre: 'Tony Stark',
    codeNade: 'Ironman',
    vivo: false,
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster']
}

const imprimePropiedades = ( personaje ) => {
    console.log(personaje.nombre);
    console.log(personaje.codeNade);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);
}

const imprimePropiedades2 =( {nombre, codeNade, vivo, edad, trajes} ) => {
    console.log({nombre});
    console.log({codeNade});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}