/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
let piValue = Math.PI;
console.log(`PI Value : ${piValue}`);

// Math sqrt
console.log(`Sqrt of 144 is : ${Math.sqrt(144)}`);

// find the min of 4 numbers
let min = Math.min(987,98,844,6,331,6,81,1,354,6351);
console.log(`Min : ${min}`);

// find the Max of 4 numbers
let max = Math.max(987,98,844,6,331,6,81,1,354,6351);
console.log(`Max : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2,4);
console.log(`2 ^ 4 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let date = new Date();
console.log(date);

// Get proper date
let today = new Date().toLocaleDateString();
console.log(today);

let time = new  Date().toLocaleTimeString();
console.log(time);

// get full day of the week using switch statement
let day = new Date().getDay();
message = '';
switch(day){
    case 0:
        message = 'Sunday';
        break;
    case 1:
        message = 'Monday';
        break;
    case 2:
        message = 'Tuesday';
        break;
    case 3:
        message = 'Wednesday';
        break;
    case 4:
        message = 'Thursday';
        break;
    case 5:
        message = 'Friday';
        break;
    case 6:
        message = 'Saturday';
        break;
    default:
        message = '';
        break;
}
console.log(`Today is : ${message}`);

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */

let minNumber = Number.MIN_SAFE_INTEGER;
console.log(minNumber);

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);

let posInfinity = Number.POSITIVE_INFINITY;
console.log(posInfinity);

let negInfinity = Number.NEGATIVE_INFINITY;
console.log(negInfinity);

let num1 = 100;
console.log(`Value : ${num1} Type : ${typeof  num1}`);

let numStr = num1.toString();
console.log(`Value : ${numStr} Type : ${typeof  numStr}`);

let someStr = '100.4654';
let newNumber = Number(someStr);
console.log(`Value : ${newNumber} Type : ${typeof  newNumber}`);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let msg = "Good Morning";
console.log(`Length : ${msg.length}`);
console.log(msg.substr(0,4)); // GOOD
console.log(msg.charAt(0)); // G
console.log(msg.substr(0,1)); // G
console.log(msg.substr(5)); // Morning

// Example 1: Count The NoOf o's in the string
let theStr = 'Good MOrning';
let countZeros = (str) => {
    let count = 0;
    for(let i=0; i<=str.length-1; i++){
        let ch = str.charAt(i);
        if(ch === 'o' || ch === 'O'){
            count++;
        }
    }
    return count;
};
console.log(`Count is : ${countZeros(theStr)}`);

// Example 2 : Reverse the string
theStr = "Good Morning";
let reverseStr = (str) => {
    let tempStr = '';
    for(let i = str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(`Rev: ${reverseStr(theStr)}`);

// Example 3: check the string is palindrome or not
theStr = "ABABA";
let isPalindrome = (str) => {
    return str === reverseStr(str);
};
console.log(`is Palindrome ? ${isPalindrome(theStr)}`);

// Example 4 : Convert to Palindrome String
theStr = 'A';
let convertPalindrome = (str) => {
    let tempStr = str;
    for(let i=str.length-2; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(`Palindrome : ${convertPalindrome(theStr)}`);

// Example 5: convert 123 => ONE TWO THREE
let theNumber = 74857;
let array = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
let wordString = (number) => {
    let tempStr = '';
    let str = number.toString();
    for(let i =0; i<str.length; i++){
        let digit = Number(str.charAt(i));
        tempStr += `${array[digit]} `;
    }
    return tempStr;
};
console.log(wordString(theNumber));

// Example 6: Triangle One
theStr = 'NAVEEN SAGGAM';
let triangleOne = (str) => {
    let tempStr = '';
    for(let i =1; i<= str.length; i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleOne(theStr));

// Example 7: Triangle Two
let addSpace = (number) => {
    let tempSpace = '';
    for(let i = 1; i<= number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};


theStr = 'NAVEEN SAGGAM';
let triangleTwo = (str) => {
    let tempStr = '';
    for(let i = 0; i<= str.length-1; i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleTwo(theStr));

// Example 8: Triangle Three
theStr = 'NAVEEN SAGGAM';
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=str.length; i>=1 ; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleThree(theStr));

// Example 9: Triangle Four
theStr = 'NAVEEN SAGGAM';
let triangleFour = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0 ; i--){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleFour(theStr));