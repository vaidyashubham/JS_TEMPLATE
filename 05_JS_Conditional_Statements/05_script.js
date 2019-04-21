// If Else condition Example
let time = 10;
let message = '';
if(time >= 0 && time <= 12){
    message = 'Good Morning';
}
else if(time > 12 && time <= 17){
    message = 'Good Afternoon';
}
else if(time > 17 && time <= 23){
    message = 'Good Evening';
}
else{
    message = 'Enter Proper time';
}
console.log(message);

// For loop Example to display from 0 - 10 values
let output = '';
for(let i=0; i<=10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// for loop to print 20 - 0
output = '';
for(let i = 20; i >= 0 ; i -= 2){
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// Print 10 stars from 1
let theNumber = 10;
output  = '';
for(let i = 1; i<= theNumber; i++){
    for(let j=1; j <= i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);

// Print Numbers 1 - 9 times
output = '';
for(let i = 1; i<= 9; i++){
    for(let j=1; j<=i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// Print values from 9 - 1 times
output = '';
for(let i = 9; i>= 1 ; i--){
    for(let k=0; k<=(9 - i); k++){
        output += ' ';
    }
    for(let j = 1; j<= i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// While loop Example to display from 0 - 10 values
console.log('------------------ While Loop --------------');
output = '';
let i=0;
while(i<=10){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
console.log(output);

// while loop to print 20 - 0
output = '';
i = 20;
while(i >= 0){
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i -= 2;
}
console.log(output);

// Print 10 stars  using while
theNumber = 10;
output  = '';
i = 1;
while(i<= theNumber){
    let j = 1;
    while(j <= i){
        output += '*';
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Print Numbers 1 - 9 times using while
output = '';
i = 1;
while(i<= 9){
    let j=1;
    while(j<=i){
        output += i;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Print values from 9 - 1 times
output = '';
i = 9;
while(i>= 1){
    let k=0;
    while(k<=(9 - i)){
        output += ' ';
        k++;
    }
    let j = 1;
    while(j<= i){
        output += i;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);

// Do while loop Example to display from 0 - 10 values
console.log('------------------ Do-While Loop --------------');
output = '';
i=0;
do{
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
while(i<=10);
console.log(output);

// Print from 20 - 0 with diff  using do- while

output = '';
i = 20;
do{
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i -= 2;
}
while(i >= 0);
console.log(output);

// Print 10 stars  using Do-while
theNumber = 10;
output  = '';
i = 1;
do{
    let j = 1;
    do{
        output += '*';
        j++;
    }
    while(j <= i);
    output += '\n';
    i++;
}
while(i<= theNumber);
console.log(output);

// Print Numbers 1 - 9 times using while
output = '';
i = 1;
do{
    let j=1;
    do{
        output += i;
        j++;
    }
    while(j<=i);
    output += '\n';
    i++;
}
while(i<= 9);
console.log(output);

// print from 9 - 1 times with space

output = '';
i = 9;
do{
    let k=0;
    do{
        output += ' ';
        k++;
    }
    while(k<=(9 - i));
    let j = 1;
    do{
        output += i;
        j++;
    }
    while(j<= i);
    output += '\n';
    i--;
}
while(i>= 1);
console.log(output);

// Switch Statement Example
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