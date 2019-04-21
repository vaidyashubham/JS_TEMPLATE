let technologies = ['html','css','javascript','bootstrap'];
technologies.sort();

// normal for - loop
let  output = '';
for(let i =0; i<technologies.length; i++){
    output += `${technologies[i].toUpperCase()} `;
}
console.log(output);

// for-in loop ES5
output = '';
for(let index in technologies){
    output += `${technologies[index].toUpperCase()} `;
}
console.log(output);

// for-of loop ES6
output = '';
for(let value of technologies){
    output += `${value.toUpperCase()} `;
}
console.log(output);

// forEach Function
output = '';
technologies.forEach(function(value) {
    output += `${value.toUpperCase()} `;
});
console.log(output);

// forEach with Arrow Function
output = '';
technologies.forEach((value) => {
    output += `${value.toUpperCase()} `;
});
console.log(output);