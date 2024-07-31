// Personaje 

let personaje = {
    nombre:"Naofumi",
    anime: "Tate no yusha",
    edad: 18,
};

console.log(personaje.nombre);
console.log(personaje.anime);
console.log(personaje['edad']);

personaje.edad = 13;

delete personaje.anime;
console.log(personaje)