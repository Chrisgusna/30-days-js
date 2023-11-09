// Task 1 Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There  is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// Task 2 Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

// Task 3 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = '10'; //initialized a variable and set it to '10'
numInt = parseInt(num); //convert string to integer using parseInt() and reassigned to numInt variable
console.log(numInt);

// Task 4 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let float = '9.81';
let numFloat = parseInt(float);

console.log(numFloat + 1);

// Task 5 Check if 'on' is found in both python and jargon
const word1 = "python";
const word2 = "jargon";
const targetWord = "on";

const result = word1.includes(targetWord) && word2.includes(targetWord);

console.log(result);

// Task 6 I hope this course is not full of jargon. Check if jargon is in the sentence.
let checkSentence = 'I hope this course is not full of jargon';
console.log(checkSentence.includes('jargon'));

// Task 7 Generate a random number between 0 and 100 inclusively.
const numHundred = Math.floor(Math.random () * 101);
console.log(numHundred);

// Task 8 Generate a random number between 50 and 100 inclusively.
const numFiftyToHundred = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(numFiftyToHundred);

// Task 9 Generate a random number between 0 and 255 inclusively.
const numZeroToTwoHundredAndFiftyFive = Math.floor(Math.random() * 256);
console.log(numZeroToTwoHundredAndFiftyFive);

//Task 10 Access the 'JavaScript' string characters using a random number.
const word = "JavaScript";
const randomIndex = Math.floor(Math.random() * word.length);

const randomCharacter = word[randomIndex];

console.log(`Random character at index ${randomIndex}: ${randomCharacter}`);

/*
Task 11 Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
console.log('1\t1\t1\t1\t1 \n2\t1\t2\t4\t8 \n3\t1\t3\t9\t27 \n4\t1\t4\t16\t64 \n5\t1\t5\t25\t125');

// Task 12 Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const phrase = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase.substr(30, 24));

// Another solution
const sentence = 'You cannot end a sentence with because because because is a conjunction';
const firstBecauseIndex = sentence.indexOf('because');
const lastBecauseIndex = sentence.lastIndexOf('because');

if (firstBecauseIndex !== -1 && lastBecauseIndex !== -1 && firstBecauseIndex !== lastBecauseIndex) {
  const extractedPhrase = sentence.substr(firstBecauseIndex, lastBecauseIndex - firstBecauseIndex + 'because'.length);

  console.log(extractedPhrase);
} else {
  console.log('The phrase "because because because" was not found in the sentence.');
}
