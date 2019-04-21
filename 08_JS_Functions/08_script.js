/*
  1) Simple Functions ,
  2) args functions ,
  3) return values ,
  4) function expressions ,
  5) functions as arguments
  6) functions inside an object
  7) Nested Objects with functions ,
  8) default args
*/

// Prepare a Chicken Curry
function glassBowl(rawChicken,masala) {
    // Mixing
    let marinateChicken = `Mixed : ( ${rawChicken} + ${masala})`;
    return marinateChicken;
}
function cookingBowl(marinatedChicken,water) {
    // Cooking
    let cookedChicken = `Cooked : (${marinatedChicken} + ${water})`;
    return cookedChicken;
}
function eatingPlate(cookedChicken,rice) {
    console.log(`Eating : ${cookedChicken} With ${rice}`);
}
let rawChicken = '2kg Chicken';
let masala = '20Gr masala';
let marinatedChicken = glassBowl(rawChicken,masala);
let water = '1Ltr Water';
let cookedChicken = cookingBowl(marinatedChicken,water);
let rice = '1Kg Rice';
eatingPlate(cookedChicken,rice);

// No-Arguments
function greet() {
    console.log('Iam from No-Args Function');
}
greet();

// Function with params
function greetArgs(name) {
    console.log(`Good Morning ${name}`);
}
greetArgs('John');

// Function with less Args
function greetLessArgs(name,age = 20){
    console.log(`Hello ${name} , You are ${age} Yrs Old!`);
}
greetLessArgs('John',40 , 'Manager');

// function with return Statement
function sum1(a ,b) {
    let theSum = a + b;
    return theSum;
}
let theSum = sum1(10,20);
console.log(theSum);

// Function Expression
let greetFn = function(name) {
    console.log('Iam from Function Expression ' + name);
};
greetFn('John');

// pass an object to a function
let student1 = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering'
};

let printStudent = function(student) {
    console.log(student);
};
printStudent(student1);

// Pass an array to an function
let array = [10,20,30,40];
let printArray = function(array) {
    console.log(array.reverse());
};
printArray(array);

// CallBack Functions
let sum = function(a , b) {
    return a + b;
};
let mul = function(a , b) {
    return a * b;
};

let calculate = function(a , b , callback){
    return callback(a , b);
};
console.log(calculate(10,20,sum));
console.log(calculate(10,20,mul));

// Arrow Functions ES6
let normalFunction = () => {
    console.log('Good Morning');
};
normalFunction();

// Arrow functions with data
let add = (a , b) => {
    let addition = a + b;
    return addition;
};
console.log(add(10,20));

// Arrays , Objects , Functions
let employees = [
    {
        name : 'John',
        age : 40,
        designation : 'Sr.Manager',
        active : true
    },
    {
        name : 'Williams',
        age : 35,
        designation : 'Manager',
        active : false
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'Laura',
        age : 28,
        designation : 'Tech Lead',
        active : false
    }
];

let activeEmployees = employees.filter(employee => {
    return employee.active;
});
console.log(activeEmployees);

let inActiveEmployees = employees.filter(employee => {
    return !employee.active;
});
console.log(inActiveEmployees);

let seniorEmployees = employees.filter( employee => {
    return employee.age >= 35;
});
console.log(seniorEmployees);

let juniorEmployees = employees.filter( employee => {
    return employee.age < 35;
});
console.log(juniorEmployees);

// Inner Functions
let outerFn = () => {
    console.log('Iam from OuterFn');
    let innerFn = () => {
        console.log('Iam From InnerFn');
    };
    innerFn();
};
outerFn();

// Function inside an Object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());
