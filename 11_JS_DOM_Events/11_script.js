let textBox = document.querySelector('#username');
let h2Element = document.querySelector('#msg');
let getData = () => {
   let textEntered = textBox.value;
   h2Element.textContent = textEntered;
    if(textEntered === 'rajan'){
        applyColors('green','lightgreen');
    }
    else{
        applyColors('red','lightsalmon');
    }
};

let applyColors = (color,bgColor) => {
    textBox.style.backgroundColor = bgColor;
    textBox.style.borderColor = color;
    textBox.style.boxShadow = `0 0 10px ${color}`;
};