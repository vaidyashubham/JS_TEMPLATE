// Normal Function
function normalFn(name) {
    console.log(`${name} : Iam from Normal Function`);
}
normalFn('Rajan');

// Function Expression
let fnExpression = function(name) {
    console.log(`${name} : Iam from Function Expression`);
};
fnExpression('Rajan');

// Arrow Function ES6
let arrowFn = (name) => {
    console.log(`${name} : Iam from Arrow Function`);
};
arrowFn('Rajan');

// Limitation of Arrow Function
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : () => {
        return `${student.firstName} ${student.lastName}`;
    }
};
console.log(student.fullName());