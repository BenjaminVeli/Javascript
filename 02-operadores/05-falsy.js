// short-circuit

// Falso
// False
// 0
// ''
// null
// undefined
// NaN

let nombre = 'Chanchito feliz';
let username = nombre || 'Anonimo';
console.log(username);

// --------------------------------------

function fn1() {
    console.log('Soy una funcion 1');
    return true;
}

function fn2() {
    console.log('Soy una funcion 2');
    return false;
}

let x = fn1() && fn2();