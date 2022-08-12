'use strict';

// Selection
const box = document.querySelector('#box');
const btn = document.querySelector('#btn');
const fromCountryBox = document.querySelector('#fromCountry');
const toCountryBox = document.querySelector('#toCountry');
const amountInput = document.querySelector('#amount');
const resultField = document.querySelector('.result');
const resultBox = document.querySelector('.form__container2');

// Function to extract rate from API
const getConversionRate = async function(fromCurrency, toCurrency) {
    const response = await fetch('https://v6.exchangerate-api.com/v6/6af040667eafb30394109424/latest/' + fromCurrency);
    const data = await response.json();
    const conversion_rates = data.conversion_rates;
    const rate = conversion_rates[toCurrency];
    return rate;
}

// Event listner on from country box
fromCountryBox.addEventListener('change', function(e) {
    box.style.display = 'flex';

    const fromCurrency = fromCountryBox.value;
    amountInput.placeholder = 'Enter Amount in ' + fromCurrency; 
    
})

// Event listner on from country box
fromCountryBox.addEventListener('click', function(e) {
    box.style.display = 'flex';

    const fromCurrency = fromCountryBox.value;
    amountInput.placeholder = 'Enter Amount in ' + fromCurrency; 
    
})


// Event listener on convert button
btn.addEventListener('click', function(e) {
    
    if(amountInput.value === '' || amountInput.value == null) {
        alert('Please Enter Amount');
        return;
    }

    const fromCurrency = fromCountryBox.value;
    const toCurrency = toCountryBox.value;

    getConversionRate(fromCurrency, toCurrency).
    then(function(response){
        const rate = response;
    
        const amount = Number(amountInput.value);

        const converted = amount * rate;
        
        resultBox.style.display = 'block';

        resultField.value = converted + ' ' + toCurrency;
    
    });

})


// fetch('https://v6.exchangerate-api.com/v6/6af040667eafb30394109424/latest/USD').then(
//     function(response){
//         return response.json();
//     }).then(
//     function(data){
//         console.log(typeof data.conversion_rates.PKR);
//     }
// ) 