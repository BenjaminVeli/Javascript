let i = 0;

// El bucle 'do...while' garantiza que el código dentro del 'do' se ejecute al menos una vez, 
// antes de verificar la condición en el 'while'.

do {
    // Este bloque de código se ejecuta primero.
    
    if (i % 2 == 0) {                   
        // Si 'i' es divisible por 2 (es decir, es un número par), se imprime en la consola.
        console.log('Número par', i);
    }
    
    i++; 
    // Incrementa el valor de 'i' en 1. Esto es necesario para que el bucle no sea infinito.
    
} while (i < 3);
// Después de ejecutar el bloque de código, se verifica la condición 'i < 3'.
// Si la condición es verdadera, el bucle se repite. Si es falsa, el bucle termina.