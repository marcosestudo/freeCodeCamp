function findLongestWordLength(str) {
  let arr = str.replace(/,/g, "").split(" ");
  let longest = arr[0];

  arr.forEach(word => {
    if (word.length > longest.length) {
      longest = word;
    }
  });

  return longest;
}

console.log(findLongestWordLength("a bb ccc, dddd"));