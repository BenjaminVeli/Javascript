/**
Conseguir una función que devuelva
donde cada uno de los elementos sea un 
objeto y devuleva el id de cada objeto
**/

let pairs = [
    [1, { name: "Nicolas"}],
    [2, { name: "Felipe"}],
    [3, { name: "Tomas"}],
];

let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Roberto',
}, {
    id: 3,
    name: 'Saul',
}];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }

    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);