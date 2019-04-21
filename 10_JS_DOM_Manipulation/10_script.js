let h2Element = document.querySelector('#msg');
let displayMessage = (message,color) => {
    h2Element.textContent = message;
    h2Element.style.backgroundColor = color;
    h2Element.style.padding = '10px';
    h2Element.style.color = 'white';
    h2Element.style.boxShadow = '0 0 10px black';
};

// JavaScript Event Listeners
let newH2Element = document.querySelector('#data');
let newDisplayMessage = (message,color) => {
    newH2Element.textContent = message;
    newH2Element.style.backgroundColor = color;
    newH2Element.style.padding = '10px';
    newH2Element.style.color = 'white';
    newH2Element.style.boxShadow = '0 0 10px black';
};

// Good Morning Button
let gmButton = document.querySelector('#gm');
gmButton.addEventListener('click',function() {
    newDisplayMessage('Good Morning' ,'orange');
});

// Good Afternoon Button
let gaButton = document.querySelector('#ga');
gaButton.addEventListener('click',function() {
    newDisplayMessage('Good Afternoon' ,'purple');
});

// Good Evening Button
let geButton = document.querySelector('#ge');
geButton.addEventListener('click',function() {
    newDisplayMessage('Good Evening' ,'blue');
});

// Good Night Button
let gnButton = document.querySelector('#gn');
gnButton.addEventListener('click',function() {
    newDisplayMessage('Good Night' ,'black');
});

// Triangle One
let textBox1 = document.querySelector('#text-box-1');
let text1 = document.querySelector('#text-1');
textBox1.addEventListener('keyup',function() {
    text1.textContent  = triangleOne(textBox1.value);
});