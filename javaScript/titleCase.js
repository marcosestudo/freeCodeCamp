function titleCase(str) {
  let newTitle = str.split(" ");
  let updatedTitle = [];
  newTitle.forEach(word => {
    updatedTitle.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  });
  return updatedTitle.join(" ");
}

console.log(titleCase("I'm a little tea pot"));