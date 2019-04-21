// let vs var

let course = 'Engineering';
if(course === 'Engineering'){
    let dept1 = 'Software';
    var dept2 = 'Govt';
}
// console.log(dept1); // ReferenceError: dept1 is not defined
console.log(dept2);

// let vs const
let empName = 'John';
empName = 'Williams';
console.log(empName); // Williams

const stdName = 'Rajan';
// stdName = 'Mahesh'; // TypeError: Assignment to constant variable.

// Const usage
const mobile = {
    brand : 'Apple',
    color : 'silver',
    RAM : '16GB'
};
mobile.brand = 'Samsung';
console.log(mobile);

// const for arrays
const technologies = ['html','css','javascript'];
technologies.sort();
console.log(technologies);

// let vs var vs const
let time = 10;
if(time <= 12){
    var msg1 = "Iam var";
    let msg2 = "Iam let";
    const msg3 = "Iam const";
}
console.log(msg1); // Iam var
// console.log(msg2); // ReferenceError: msg2 is not defined
// console.log(msg3); // ReferenceError: msg3 is not defined