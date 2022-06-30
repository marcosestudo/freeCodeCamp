// printárá o último número do laço, pois o "i" foi declarao e modificado globalmente
var printNumTwo;
for (var i = 0; i < 10; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());

// "i" será impresso como o último número do laço
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

// "i" não foi definido no escopo global
var numArray = [];
for (let j = 4; j < 7; j++) {
  numArray.push(j);
}
console.log(numArray);
console.log(j);

// Não dá erro de redeclaração de variável com o mesmo nome porque o let criou uma variável "i" diferente em cada escopo
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
