/*let textAreaBox = document.querySelector('.input-text');
let preTag = document.querySelector('.pre');

let  triangleOne = (str) => {
    let tmpStr = '';
    for(let i = 1; i<= str.length; i++){
        tmpStr += `${str.substr(0,i)} \n`;
    }
    return tmpStr;
};
textAreaBox.addEventListener('keyup',function () {
    let strVal = triangleOne(textAreaBox.value);
    preTag.innerText= strVal;
});*/

// Triangle One
let textBox1 = document.querySelector('#text-box-1');
let text1 = document.querySelector('#text-1');
textBox1.addEventListener('keyup',function() {
    text1.textContent  = triangleOne(textBox1.value);
});

// Triangle Two
let textBox2 = document.querySelector('#text-box-2');
let text2 = document.querySelector('#text-2');
textBox2.addEventListener('keyup',function() {
    text2.textContent  = triangleTwo(textBox2.value);
});

//Triangle Three

let textBox3 = document.querySelector('#text-box-3');
let text3 = document.querySelector('#text-3');
textBox3.addEventListener('keyup',function () {
    text3.textContent = triangleThree(textBox3.value);
});

//Triangle Four

let textBox4 = document.querySelector('#text-box-4');
let text4 = document.querySelector('#text-4');
textBox4.addEventListener('keyup',function () {
    text4.textContent = triangleFour(textBox4.value);
});

// Count The No of o's in the string

let textBox5 = document.querySelector('#text-box-5');
let text5 = document.querySelector('#text-5');
textBox5.addEventListener('keyup',function () {
    text5.textContent = countZeros(textBox5.value);
});

//Reverse the string
let textBox6 = document.querySelector('#text-box-6');
let text6 = document.querySelector('#text-6');
textBox6.addEventListener('keyup',function () {
    text6.textContent = reverseStr(textBox6.value)
});

//check the string is palindrome or not

let textBox7 = document.querySelector('#text-box-7');
let text7 = document.querySelector('#text-7');
textBox7.addEventListener('keyup',function () {
    text7.textContent = isPalindrome(textBox7.value);
});

//Convert to Palindrome String
let textBox8 = document.querySelector('#text-box-8');
let text8 = document.querySelector('#text-8');
textBox8.addEventListener('keyup',function () {
    text8.textContent =convertPalindrome(textBox8.value);
});

