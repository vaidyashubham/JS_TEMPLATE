// Assignment operator =
let name = 'John';
console.log(`Name : ${name}`);

// Arithmetic operators + - * /
let num1 = 10;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

let theNumber = 101;
if(theNumber % 2 === 0){
    console.log(`${theNumber} is Even Number`);
}
else{
    console.log(`${theNumber} is Odd Number`);
}

// Short hand math += , -= , *= , /=
let a = 10;
let b = 20;
let add = 0;
add = add + (a + b); // 0 + 10 + 20 => 30
add += (a + b); // 30 + 10 + 20 => 60
console.log(`Add : ${add}`); // 60

// Conditional operators < , > , <= , >= , !==
let age = 25;
if(age < 18){
    console.log('You are Minor');
}
else{
    console.log('You are Major');
}

// Unary Operator ++ , -- (pre , post)
let x = 10;
x = x - 1;
x -= 1;
x--;
console.log(x); // 13

// Logical operators AND , OR
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until parents Agreed');
}

// String Concatenation Operator
x = 10 + 20 + '10' + 20 + 10;
console.log(x);

// Ternary operator (? :)
age = 25;
let message = '';
(age > 18)? message = 'You are Major' : message = 'You are Minor';
console.log(message);

// Type of operator
let abc = 'test';
console.log(`value : ${abc} Type : ${typeof abc}`);

// == operator
a = 10;
b = '10';
if(a == b){
    console.log('both are Equal');
}
else{
    console.log('both are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('both are Equal');
}
else{
    console.log('both are NOT Equal');
}