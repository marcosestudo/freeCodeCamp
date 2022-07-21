// a função recebe um array como primeiro argumento e "n" valores para serem removidos
// Podemos receber os valores com spread
function destroyer(arr, ...valsToRemove) {
  console.log(arr, valsToRemove);
  return arr.filter(elem => !valsToRemove.includes(elem));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));

// Podemos receber tudo com um único argumento e separar os valores com "Array.from(arguments)"
function destroyer1(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}
