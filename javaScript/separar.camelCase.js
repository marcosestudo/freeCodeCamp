// spinal case é uma string com as palavras minúsculas separadas por hífen
function spinalCase(str) {
  // Regex pra pegar espaço e underscore
  var regex = /\s+|_+/g;

  // Replace low-upper case para low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2"); // "$1 $2" == primeiro e segundo caracteres da regex separadas por um espaço 

  // Replace spaço e underscore por -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");
