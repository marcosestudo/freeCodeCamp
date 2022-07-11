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

// Remove os elementos slecionados nos parâmetros 1 e 2, adiciona os elementos a partir do terceiro parâmetro 
console.log(`removidos: ${arr.splice(1, 3, 1, 2 ,3)}`); // Se não definir o número de itens, remove do indice indicado até o final
console.log(arr);