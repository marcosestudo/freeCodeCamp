// replace que mantém capitalização da palavra substituída
function myReplace(str, before, after) {
  if (before.match(/[A-Z]/) != null) {
    return str.replace(before, after.charAt(0).toUpperCase().concat(after.slice(1)));
  }
  return str.replace(before, after.charAt(0).toLowerCase().concat(after.slice(1)));
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("He is sleeping on the couch", "sleeping", "Sitting"));
