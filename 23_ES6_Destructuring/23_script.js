// Destructuring
let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

// Destructuring
let { name , designation } = employee;

console.log(`Name : ${name} 
             Designation : ${designation}`);

// Destructuring
let {city , country } = employee.address;
console.log(`City : ${city} 
             Country : ${country}`);

// To Swap two variables
let a = 100;
let b = 200;
[a , b] = [b , a];
console.log(`a => ${a} b => ${b}`);