
function saludar( nombre ) {
    console.log( arguments );
    console.log('Hola ' + nombre);

}

//const saludar2 = function() {
//    console.log('Hola mundo');
//}

saludar('Walter', 32, true, 'Argentina');

const saludarFlecha = () => {
     console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
     console.log('Hola Flecha');
}

saludarFlecha();
saludarFlecha2('Walter');