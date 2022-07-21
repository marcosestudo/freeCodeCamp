function bouncer(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    if (/false|null|0|undefined|NaN/.test(arr[i])) {
      arr[i] = "";
    }
}

  return arr.filter(item => item != "");
}

console.log(bouncer([7, "ate", "", false, 9]));



function bouncer1(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

console.log(bouncer1([7, "ate", "", false, 9]));
