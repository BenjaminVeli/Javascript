let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 20,
};

for (let prop in user) {
//  console.log(prop);                         -> Te muesta el valor osea id , name , age  
    console.log(prop, user[prop]);          // -> Te muestra el valor junto a lo que contiene
}

let animales = ['Chanchito feliz', 'Dragón' , 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);   // -> Te muestra el índice junto a lo que contiene es decir 0 Chanchito
}