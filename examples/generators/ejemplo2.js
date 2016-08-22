"use strict";

// Un generador
function* gen2(n) {
  yield n;
  yield n+1;
  yield n+2;
}

function* gen1(n) {
  yield 'a';
  yield 'b';
  yield* gen2(n); // Llamamos a generador 2
                  // Y vamos entregando uno a uno sus datos
                  // Ergo, yield* gen2(n) !== yield gen2(n)
  yield 'c';
  yield 'd';
  yield* "hola!";
  yield* ["foo", "bar"];
  yield "end";
}

// Consumimos el primer generador
for (let i of gen1(10)) {
  console.log(i);
}
