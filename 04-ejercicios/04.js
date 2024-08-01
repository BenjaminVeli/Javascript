// Imprimir números impares de 0 al 10

let i = 0;
while(i < 10){
    if(i % 2 !== 0){
        console.log('Numero impar', i);
    }
    i++;
}
console.log('Fuera del bucle while');