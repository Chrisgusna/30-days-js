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
