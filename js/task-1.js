console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

function slugify(title) {
  // Option 1
  // const result = title.split(' ').join('-').toLowerCase();
  // return result;

  // Option 2
  const splitTitle = title.split(' ');
  const joinTitle = splitTitle.join('-');
  const transformTitleToLowerCase = joinTitle.toLowerCase();
  return transformTitleToLowerCase;
}
