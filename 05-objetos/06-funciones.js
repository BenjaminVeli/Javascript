function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length); // -> La cantidad de argumentos que recibe una función

const U = Usuario
let user = new U('Benjamín');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

function returned() {
    return function() {
        console.log('Hola mundito');
    }
}

let saludo = returned();
saludo();
