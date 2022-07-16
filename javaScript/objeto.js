const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

// Adicionando propriedades ao objeto
tekkenCharacter.origin = 'South Korea';

tekkenCharacter['hair color'] = 'dyed orange';

const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';

console.log(tekkenCharacter);

// Checando se existe a propriedade no objeto com hasOwnProperty ou "in"
console.log(tekkenCharacter.hasOwnProperty("player"));
console.log("player" in tekkenCharacter);
console.log("---------------------------------")

// Deletando propriedades do objeto com a palavra-chave "delete"
delete tekkenCharacter.player;
console.log(tekkenCharacter);

console.log(tekkenCharacter.hasOwnProperty("player"));
console.log("player" in tekkenCharacter);
console.log("---------------------------------")

// Object.keys( ) retorna um array com as propriedades / chaves do objeto
console.log(Object.keys(tekkenCharacter));

// Não esqueça que para acessar variáveis devemos usar a notação de colchetes
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  for (let user in usersObj) {          // for ... in para iterar em objetos
    console.log(usersObj[user].online); // notação de colchetes para acessar a variável criada no for
  }
}

countOnline(users);