// cuales son los numeros pares

let i = 0;
while (i < 10) {
    if (i % 2 == 0) {                   // -< El if se agrega para solo imprimir números pares
        console.log('Número par', i);
    }
    i++;                                // -> Para ver un loop infinito comentar esta linea
}

console.log('Fuera del while');