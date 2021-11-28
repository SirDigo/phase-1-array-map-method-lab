const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function caps(word) {
  const i = word.charAt(0).toUpperCase() + word.slice(1);
  return i;
}

const titleCased = (array) => {
  const newArr = tutorials.map(titles => {
    let words = []; 
    words += titles.split(' ').map(caps).join(' '); 
    return words;
  })
  return newArr;
}


// const titleCased = () => {
//   const array = tutorials.map()
// }



console.log(titleCased(tutorials));