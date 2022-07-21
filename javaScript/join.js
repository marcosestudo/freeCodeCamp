const arr = ["Hello", "World"];
const str = arr.join(" ");

console.log(str);


// split + join
function sentensify(str) {
  return str.split(/\W/).join(" ");
}

sentensify("May-the-force-be-with-you");