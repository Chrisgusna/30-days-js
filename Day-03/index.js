// Task 1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'Christopher';
const lastName = 'John';
const country = 'Nigeria';
const city = 'Abuja';
const age = 98;
const isMarried = false;
const year = 2023;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

// Task 2 Check if type of '10' is equal to 10
let num = '10';
console.log(typeof(num) === 10);

// Task 3 Check if parseInt('9.8') is equal to 10
let float = '9.8';
console.log(parseInt('9.8') === 10);

/*
Task 4 Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
*/
function firstTruthyStatement(){
    if(firstName != lastName){
       return true;
    } else{
        return false;
    };
};

firstTruthyStatement();
console.log(firstTruthyStatement());

const secondTruthyStatement = () =>{
    if(firstName.length >= lastName.length){
        return true;
    } else {
        return false
    };
};

secondTruthyStatement();
console.log(secondTruthyStatement());


/*
Task 5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.
*/

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 === '4');

let firstWord = 'Python';
let secondWord = 'jargon';

function findLengthOfPythonAndJargon(){
    if(firstWord.length === secondWord.length){
        return true
    } else{
        return false
    };
};

findLengthOfPythonAndJargon();
console.log(findLengthOfPythonAndJargon());

/*
Task 6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python
*/

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!(4 === '4'));

/*
Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now
*/
let now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDate() + 1);
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime()) 