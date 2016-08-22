"use strict";

// Creamos un objeto de ejemplo
var MyObject = function(){
  let index = 0;

  // Creamos un iterador cualquiera
  this.myIterator = function(){ // el cual es una funcion
    return { // que devuelve un objeto
      next: function(){ // que contiene el metodo next
        index++;

        return { // que devuelve un objeto con done y value
          value: index < 10 ? index : undefined,
          done: index >= 10
        };
      }
    };
  };

  // Volvemos el objeto iterable definiendo su propiedad Symbol.iterator
  this[Symbol.iterator] = this.myIterator;
};

// Consumimos el objeto instanciandolo
var obj = new MyObject();

// Usemos un método iterable para consumir los datos
for (let i of obj){
  console.log(i);
}
