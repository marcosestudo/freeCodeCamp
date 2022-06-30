const user = { name: "Jão", age: 53 };
console.log(user.age);

// A variável dete ter o mesmo nome dos atributos do objeto, se não, ertorna undefined
const { nome, age } = user;
console.log(nome);
console.log(age);

// Podemos usar desestruturação como outros nomes de variáveis da forma abaixo
const { name: userName, age: userAge } = user;
console.log(userName);