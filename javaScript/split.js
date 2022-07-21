// Usando split para separar string em array usando regex como separador
function splitify(str) {
  return str.split(/\W/);
}

console.log(splitify("Hello World,I-am code"));
