// Retorna true se todos os elementos passarem no teste
const numbers = [1, 10, 20];

let bool = numbers.every(function(currentValue) {
  return currentValue < 10;
});
console.log(bool);



const numbers2 = [1, 2, 3];

let bool2 = numbers2.every(number => number < 10);

console.log(bool2);



// some retorna true se um elemento atender a condição
const numbers3 = [10, 50, 8, 220, 110, 11];

let bool3 = numbers3.some(currentValue => currentValue < 10);

console.log(bool3);
