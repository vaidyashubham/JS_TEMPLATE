// Get the HTML Elements
let textAreaBox = document.querySelector('#text-area');
let spanTag = document.querySelector('#span');
let charCount = 100;
textAreaBox.addEventListener('keyup',function() {
    let textEnteredLength = textAreaBox.value.length;
    let theCount = charCount - textEnteredLength;
    spanTag.textContent = (theCount).toString();
    if(theCount === 0){
        textAreaBox.style.borderColor = 'green';
        textAreaBox.style.boxShadow = '0 0 10px green';
    }
    else{
        textAreaBox.style.borderColor = 'gray';
        textAreaBox.style.boxShadow = '0 0 10px gray';
    }
});

// Show Password
let passwordBox = document.querySelector('#password');
let checkBox = document.querySelector('#check');
checkBox.addEventListener('change',function() {
    let attribute = passwordBox.getAttribute('type');
    if(attribute === 'password'){
        passwordBox.setAttribute('type','text');
    }
    else{
        passwordBox.setAttribute('type','password');
    }
});

// Select Box
let selectBox = document.querySelector('#lang-select');
let technologies = ['html','css','javascript','Jquery','bootstrap','React JS'];
let options = '';
technologies.forEach((value) => {
    options += `<option>${value.toUpperCase()}</option> \n`;
});
selectBox.innerHTML = options;