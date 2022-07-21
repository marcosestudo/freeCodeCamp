// testa se a regex está presente na string
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(myRegex.test(myString));
console.log(/asd/.test("asd fg"));

// vê se a string combina com a regex
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/ig; // flag "i" == ignorar caixa alta; flag "g" == global == achar vários 
let result2 = extractStr.match(codingRegex);
console.log(extractStr.match(codingRegex));
console.log("Extract the word 'coding' from this string.".match(/coding/));

// [A-Za-z0-9_] == \w
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Altere esta linha
let result3 = quoteSample.match(alphabetRegexV2).length
console.log(result3);

// busca caracteres repetidos
console.log("aaabaaba".match(/a/g));

// buscar zero ou mais elementos >>> * == {0,}

// Criando regex a partir de uma string recebida como input
let str = "asd";
let reg = new RegExp(str.split("").join("|"), "g");
console.log(reg);
