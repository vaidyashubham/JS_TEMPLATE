/*
  * 1) Object Creation
  * 2) Adding and Deleting props
  * 3) Retrieval
  * 4) Object Literal
  * 5) dot , [] notation
  * 6) Nested Objects
*/

// Creating an Object
let fridge = {};
fridge.veg = 'Tomotos';
fridge.eggs = 10;
console.log(fridge);

// Creating an Object Literal
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000,
    isInsured : false
};
console.log(mobile);

// Access the properties dot , []
console.log(`Brand : ${mobile.brand}`);
console.log(`Brand : ${mobile['brand']}`);

// Nested Object
let student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);
console.log(student.address);
student.address.street = 'Ameerpet';
console.log(student.address);

// delete a property
console.log(student);
delete student.address;
console.log(student);

// JSON functions
student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);
let stuStr = JSON.stringify(student);
console.log(stuStr);

let theStr = '{"name":"Rajan","age":22,"course":"Engineering","address":{"city":"Hyderabad","state":"TS","country":"India"}}';
let newStudent = JSON.parse(theStr);
console.log(newStudent);

