const user = { id: 1 }; // Creamos un objeto 'user'

user.name = 'Nicolas';

user.guardar = function () {        // Añadimos un método 'guardar'
    console.log('Guardando', user.name);
}

user.guardar(); // Imprime: Guardando Nicolas

console.log('----------------------');

// Eliminamos la propiedad 'name' del objeto 'user'.
delete user.name;
// Eliminamos el método 'guardar' del objeto 'user'.
delete user.guardar;
// Imprimimos el objeto 'user' en la consola para ver sus propiedades actuales.
console.log(user); // Imprime: { id: 1 }

// Creamos un objeto 'user1' con una propiedad 'id' y usamos Object.freeze para hacerlo inmutable.
const user1 = Object.freeze({ id: 1 }); // -> Object.freeze hace que el objeto no pueda ser modificado.

// Intentamos añadir una nueva propiedad 'name' al objeto 'user1', pero no se añadirá debido a Object.freeze.
user1.name = 'Nico';
// Imprimimos el objeto 'user1' en la consola para ver sus propiedades actuales.
console.log(user1); // Imprime: { id: 1 }

// Creamos un objeto 'user2' con una propiedad 'id' y usamos Object.seal para evitar la adición/eliminación de propiedades.
const user2 = Object.seal({ id: 1 }); // -> Object.seal permite modificar las propiedades existentes, pero no añadir o eliminar propiedades.

// Añadimos una nueva propiedad 'name' al objeto 'user2', esto es permitido por Object.seal.
user2.name = 'Pepo';
// Modificamos la propiedad 'id' del objeto 'user2', esto es permitido por Object.seal.
user2.id = 3;
// Imprimimos el objeto 'user2' en la consola para ver sus propiedades actuales.
console.log(user2); // Imprime: { id: 3, name: 'Pepo' }
