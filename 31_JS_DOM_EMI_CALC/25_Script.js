// Get all the HTML Elements

let enteredAmount = document.querySelector('#amount');
let enteredYear = document.querySelector('#years');
let enteredRate = document.querySelector('#rate');
let calculateButton = document.querySelector('#calculate');
let resetButton = document.querySelector('#reset');
let resultButton = document.querySelector('#result');

 // EMI = [P x R x (1+R)^N]/[(1+R)^N-1]

// Calculate Button Logic
calculateButton.addEventListener('click',function () {
    let amount = Number(enteredAmount.value);
    let rate = Number(enteredRate.value);
    let year = Number(enteredYear.value);
    let emi = '';
    let calculate = (amount,rate,year) => {
            let numerator = amount * (rate / (100 * 12)) * [Math.pow((1 + rate / (100 * 12)),year * 12)];
            let denominator = Math.pow((1 + rate / (100 * 12)),year * 12)-1;
            emi =  numerator / denominator;
            return emi;
    };
    resultButton.textContent = calculate(amount,rate,year);
});

//Reset Button Logic //
resetButton.addEventListener('click',function () {
    enteredAmount.value = '';
    enteredYear.value = '';
    enteredRate.value = '';
    resultButton.textContent = 'EMI';
});