function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("hello"));



function reverseString1(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverseString1("hello"));



function reverseString2(str) {
  let reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  str = reversed.toString();
  return str.replace(/,/g, "");
}

console.log(reverseString2("hello"));
