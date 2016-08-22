"use strict";

function* myGen() {
  let index = 0;

  while(true) {
    yield index++;
  }
}

var iter = myGen();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// Otra forma:
for (let i of iter) {
  console.log(i); // Never ends

  if (i > 100)
    break;
}
