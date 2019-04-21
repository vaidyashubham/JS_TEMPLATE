// creation of arrays
let array = [10,20,30,40,50];
console.log(array);

// Accessing an array and its properties
console.log(array[1]);

// Access not existed property from an array
console.log(array[5]); // undefined

// Accessing length of an Array
console.log(`Length : ${array.length}`);

// reverse the array using reverse()
array = [10,20,30,40,50];
console.log(array);
array.reverse();
console.log(array);

// Remove the first value of the array: shift()
array = [10,20,30,40,50];
console.log(array);
array.shift();
console.log(array);

// Add value to front of the array:unshift()
array = [10,20,30,40,50];
console.log(array);
array.unshift(60);
console.log(array);

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
console.log(array);
array.pop();
console.log(array);

// Add value the end of the array: push()
array = [10,20,30,40,50];
console.log(array);
array.push(60);
console.log(array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
// Splice(index)
array = [10,20,30,40,50];
console.log(array);
array.splice(1);
console.log(array);

// Splice(index,nofElements)
array = [10,20,30,40,50];
console.log(array);
array.splice(1,1);
console.log(array);

// Splice(index,1,replaceElement)
array = [10,20,30,40,50];
console.log(array);
array.splice(1,1,80);
console.log(array);

// Create a copy of an array. Typically assigned to a new variable:slice();
let arr1 = [10,20,30,40];
let arr2 = arr1.slice();
arr1.splice(2);
console.log(arr2);

// indexOf()
array = [10,20,30,40,50];
let theNumber = 500;
if(array.indexOf(theNumber) === -1){
    console.log(`${theNumber} is Not Exists`);
    array.push(theNumber);
}
else{
    console.log(`${theNumber} is Exists @ Index : ${array.indexOf(theNumber)}`);
}
console.log(array);

// join() , split()
let tech = ['html','css','javascript','bootstrap'];
let techStr = tech.join(' - ');
console.log(techStr);

let newTech = techStr.split(' - ');
console.log(newTech);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let technologies = ['html','css','javascript','bootstrap'];
technologies.sort();
console.log(technologies);

// Loop array using normal for-loop
let output = '';
for(let i=0; i<technologies.length; i++){
    output += `${technologies[i].toUpperCase()} `;
}
console.log(output);

// Using for-in loop ES5
output = '';
for(let index in technologies){
    output += `${technologies[index].toUpperCase()} `;
}
console.log(output);

// Using for-of loop ES6
output = '';
for(let value of technologies){
    output += `${value.toUpperCase()} `;
}
console.log(output);

// Using forEach Function
output = '';
technologies.forEach(function(value) {
    output += `${value.toUpperCase()} `;
});
console.log(output);

// Using forEach with Arrow Functions ES6
output = '';
technologies.forEach(value => {
    output += `${value.toUpperCase()} `;
});
console.log(output);

// Array of Objects
let employees = [
    {
        name : 'John',
        age : 35,
        designation : 'Manager'
    },
    {
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Manager'
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer'
    }
];
console.log(employees);

// Loop from Employee Object
for(let employee of employees){
    console.log(employee.name);
}