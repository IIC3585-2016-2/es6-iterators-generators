"use strict";

// Creamos un iterable
var foo = ['a', 1, '2', '5', "bar"];

// Forma 1: llamando a next() desde el iterable
console.log(foo[Symbol.iterator]().next());

// Forma 2: usando for ... of
for(let i of foo){
  console.log(i);
}

// Forma 3: usando destructuring
let [x, y] = foo;

console.log(x); // 'a'
console.log(y); // 1

// Forma 4: usando spread operator
let [z, w, ...resto] = foo;

console.log(z); // 'a'
console.log(w); // 1
console.log(resto); // ['2', '5', "bar"]

// ¡Hay más! Pueden usarse incluso implementaciones propias
