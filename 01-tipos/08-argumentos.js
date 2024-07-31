function suma(a, b) {
    console.log(arguments)
    return a + b;
}

let resultado = suma(5, 6, 10 , 11, 2);
console.log(resultado);
console.log(typeof suma);

