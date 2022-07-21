function rot13(str) {
  const arr1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const arr2 = "NOPQRSTUVWXYZABCDEFGHIJKLM".split("");
  let result = [];
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (/\w/.test(str[i])) {
      result.push(arr2[arr1.indexOf(str[i])]);
    } else {
      result.push(str[i]);
    }

  }
  return result.join("");
}

console.log(rot13("SERR CVMMN!"));