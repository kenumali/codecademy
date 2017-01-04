/*
Take a sentence like, 'Turpentine and turtles,' and translate it into its whale talk equivalent: 'UUEEIEE A UUEE'.

There are a few simple rules to translating text to the whale language:
1. There are no consonants. Only vowels.
2. The 'u's and 'e's are extra long, so we must double 'u's and 'e's.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/

var input = prompt('Enter a sentence to translate into whale talk.');
var vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];
for(var i=0; i < input.length; i++) {
  if(input[i] === 'e'){
     resultArray.push(input[i]);
  } else if(input[i] === 'u'){
    resultArray.push(input[i]);
  }
  for(var j=0; j < vowels.length; j++) {
    if(input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
console.log(resultArray.join('').toUpperCase());
