let countArray = [];
let count;

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    countArray.push(startNum);
    rangeOfNumbers(startNum + 1, endNum);
    return countArray;
  }
}
console.log(rangeOfNumbers(1, 5));
