// Task 1 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const numOfLoveWord = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const targetSubstring = 'love';
let count = 0;

for (let i = 0; i <= numOfLoveWord.length - targetSubstring.length; i++) {
  if (numOfLoveWord.substring(i, i + targetSubstring.length) === targetSubstring) {
    count++;
  }
}

console.log(`The substring "${targetSubstring}" appears ${count} times.`);

// Task 2 Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentenceBecause = 'You cannot end a sentence with because because because is a conjunction';
const targetWordBecause = 'because';
const regex = new RegExp(targetWordBecause, 'g');
const matches = sentenceBecause.match(regex);
const countBecause = matches ? matches.length : 0;

console.log(`The word "${targetWordBecause}" appears ${countBecause} times.`);

/*
Task 3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; 
&as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;
I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs.
%Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
*/

