let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
// em modo estrito, dará erro ao tentar modifocar o objeto
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 