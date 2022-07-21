const myArray = ["a", "b", 1, true, undefined, null];
const arr = ["a", "b", "c", "d", "e"];
console.log(arr);

// Adiciona elemento no final do array
arr.push("no final")
console.log(arr);

// Adiciona elemento no início do array
arr.unshift("no inicio");
console.log(arr);

// Remove e retorna o último elemento
arr.pop();
console.log(arr);

// Remove e retorna o primeiro elemento
arr.shift();
console.log(arr);

// Splice - Remove os elementos selecionados nos parâmetros 1 e 2, adiciona os elementos a partir do terceiro parâmetro 
// Parâmetros - (índice do primeiro elemento, quantos elementos excluir) 
console.log(`removidos: ${arr.splice(1, 3, 1, 2 ,3)}`); // Se não definir o número de itens, remove do indice indicado até o final
console.log(arr);

// Slice - retorna os elementos sem modificar o array original
// Parâmetros - (índice do primeiro elemento, índice do último elemento a ser capturado + 1)
console.log(`slice: ${arr.slice(1, 3)}`);
console.log(arr); // O array permanece imutado

// Spread
console.log(...arr);

// Usa-se indexOf para saber se o elemeneto está no array, retorna o índice do elemento
console.log(arr.indexOf("e")); // Se não estiver, retorna -1

// Removendo elemento específico do aray com indexOf e splice
const array = ["a", "b", "c"];

console.log(array);

const index = array.indexOf("b");
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

console.log(array); 

// Concatenando arrays com concat, concat retorna o array concatenado sem modifcar o original
const concatArray = myArray.concat(arr); // < esses arrays foram declarads nas duas primeiras linhas
console.log(concatArray);
