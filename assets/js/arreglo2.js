let juegos = ['Zelda', 'Mario', 'Metroid'];
console.log('Largo', juegos.length)

juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr});
});
