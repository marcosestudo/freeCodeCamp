const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

// map retorna um array com os retornos da callback sem modificar o array original
const names = users.map(user => user.name);
console.log(names);

// filter retorna um array com os elementos que retornam true sem modificar o array original
const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30);

// Podemos usar os dois ao mesmo tempo
const usersUnder30Name = users.filter(user => user.age < 30).map(user => user.name);
console.log(usersUnder30Name);

// A callback da map e da filter também podem receber como argumentos, além do elemento processado,
// o índice e o array < fazer busca para mais detalhes
