// Spread Operator

// Example 1 :
let array1 = [10,20,30];
let array2 = [...array1,40,50,60];
let array3 = [...array2,70,80,90,100];
console.log(array3);

// Example 2 : create a new copy
let arr1 = ['html','css','javascript'];
let arr2 = [...arr1];
console.log(arr2);

// Example 3 : use spread operator to a pass array elements to a function as a parameters
let array = [1,54,498,61,891,61,6751,984,5,59,165];
let min = Math.min(...array);
console.log(`Min : ${min}`);
