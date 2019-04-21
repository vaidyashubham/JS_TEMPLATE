// Get the HTML Elements
let usernameElement = document.querySelector('#username');
let emailElement = document.querySelector('#email');
let passwordElement = document.querySelector('#password');
let checkBox = document.querySelector('#check');
let confirmPasswordElement = document.querySelector('#password_confirm');

// Get Error Message Element
let usernameErrorElement = document.querySelector('#name_error');
let emailErrorElement = document.querySelector('#email_error');
let passwordErrorElement = document.querySelector('#password_error');
let message = '';

// UserName Blur Event
usernameElement.addEventListener('blur',function() {
    clearErrorMessage(usernameElement,usernameErrorElement);
});
// Email Blur Event
emailElement.addEventListener('blur',function() {
    clearErrorMessage(emailElement,emailErrorElement);
});
// Password Blur Event
passwordElement.addEventListener('blur',function() {
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});
// Confirm Password Blur Event
confirmPasswordElement.addEventListener('blur',function() {
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
     clearErrorMessage(passwordElement,passwordErrorElement);
});

let validate = () => {
    let isValid = true;

    // Required User Name Validation
    if(usernameElement.value === ''){
        message = 'User Name is Required';
        displayErrorMessage(usernameElement,usernameErrorElement,message);
        isValid = false;
        return false;
    }

    // Username length validation
    if(usernameElement.value.length < 5){
        message = 'Enter at least 5 letters';
        displayErrorMessage(usernameElement,usernameErrorElement,message);
        isValid = false;
        return false;
    }

    // Username RegExp validation
    if(usernameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        message = 'Pattern is Not Matched';
        displayErrorMessage(usernameElement,usernameErrorElement,message);
        isValid = false;
        return false;
    }

    // Required Email Validation
    if(emailElement.value === ''){
        message = 'Email is Required';
        displayErrorMessage(emailElement,emailErrorElement,message);
        isValid = false;
        return false;
    }

    // Required Password Validation
    if(passwordElement.value === ''){
        message = 'Password is Required';
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        isValid = false;
        return false;
    }

    // Required Confirm Password Validation
    if(confirmPasswordElement.value === ''){
        message = 'Confirm Password is Required';
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        isValid = false;
        return false;
    }

    // Password's Match Validation
    if(passwordElement.value !== confirmPasswordElement.value){
        message = "both the passwords not matched";
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        isValid = false;
        return false;
    }

    if(isValid){
        alert('Form Submitted Successfully');
        return true;
    }
    else{
        return false;
    }
};
//show password
checkBox.addEventListener('change',function () {
    let attribute1 = passwordElement.getAttribute('type');
    let attribute2 = confirmPasswordElement.getAttribute('type');
    if((attribute1 && attribute2)=== 'password'){
        passwordElement.setAttribute('type','text');
        confirmPasswordElement.setAttribute('type','text');
    }
    else {
        passwordElement.setAttribute('type','password');
        confirmPasswordElement.setAttribute('type','password');

    }
});

// Display Error Messages
let displayErrorMessage = (inputElement,errorElement,message) => {
    inputElement.style.borderColor = 'red';
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.boxShadow = '0 0 10px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
};

// Clear Error Messages
let clearErrorMessage = (inputElement,errorElement) => {
    inputElement.style.borderColor = 'gray';
    inputElement.style.backgroundColor = 'white';
    inputElement.style.boxShadow = '0 0 0px white';
    errorElement.textContent = '';
};