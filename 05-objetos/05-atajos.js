let obj = {};
let obj2= new Object();

/**
 new Array(); []
 new String; "" '' 
 new Number(); 12
 new Boolean(); true falase
**/

function Usuario() {
    this.name = "Chanchito feliz";
}

let user = new Usuario();
console.log(user.constructor);

// example

const s1 = "1 + 1"; // en consola -> 1+ 1
const s2 = new String ("1 + 1"); // en consola -> String {'1 + 1'}
console.log(eval(s1), eval(s2));