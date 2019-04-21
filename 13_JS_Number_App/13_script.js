// Get the HTML Elements
let numberBox = document.querySelector('#number');
let displayElement = document.querySelector('#text-number');
let array = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

let wordString = (number) => {
    let tempStr = '';
    let str = number.toString();
    for(let i =0; i<str.length; i++){
        let digit = Number(str.charAt(i));
        tempStr += `${array[digit]} `;
    }
    return tempStr;
};

numberBox.addEventListener('keyup',function() {
    displayElement.textContent = wordString(numberBox.value);
});