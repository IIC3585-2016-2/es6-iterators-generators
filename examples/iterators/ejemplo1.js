"use strict";

// Contamos en el iterador
var myIterator = function(){
  let index = 0;

  this.next = function(){
    index++; // Incrementamos las cuenta del iterador

    return { // Regresamos el valor
      value: index < 10 ? index : undefined,
      done: index >= 10
    };
  };
};

// Creamos el iterador
var iter = new myIterator();

// Consumimos el iterador llamando directamente a next():
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// En el ejemplo 2 veremos formas menos burdas de consumir un iterable.
