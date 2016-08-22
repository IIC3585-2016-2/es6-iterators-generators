"use strict";

// ---------------------------------------------------------------
// Array tiene su propio iterador
// ---------------------------------------------------------------
var ej1 = ['a', 'b', 'c', 'd'];

let iter1_1 = ej1[Symbol.iterator]();
let iter1_2 = ej1[Symbol.iterator]();

console.log("Ejemplo 1:");
console.log(iter1_1.next()); // 'a'
console.log(iter1_1.next()); // 'b'
console.log(iter1_2.next()); // 'a'
console.log(iter1_2.next()); // 'b'
console.log(iter1_1.next()); // 'c'
console.log("");

// ---------------------------------------------------------------
// String tiene su propio iterador
// ---------------------------------------------------------------
var ej2 = "hola!";

let iter2_1 = ej2[Symbol.iterator]();

console.log("Ejemplo 2:");
console.log(iter2_1.next());
console.log(iter2_1.next());
console.log(iter2_1.next());
console.log("");

// ---------------------------------------------------------------
// ¡Map también!
// ---------------------------------------------------------------
var ej3 = new Map();
ej3.set("foo", "bar");
ej3.set(1, 3);
ej3.set("john", "doe");

let iter3_1 = ej3[Symbol.iterator]();

console.log("Ejemplo 3:");

// Ejemplo de como consumirlo con un for
for(let [i,j] of iter3_1){ // iter3_1.next().value es un arreglo [key, value]
  console.log([i,j]);
}
