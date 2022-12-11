/*const firstCurrency = document.getElementById('currency-one');
const secondCurrency = document.getElementById('currency-two');
const firstAmount = document.getElementById('amount-one');
const secondAmount = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetchar exchange rates
function calculate() {
    
    const currencyOne = firstCurrency.value;
    const currencyTwo = secondCurrency.value;
  
    fetch(`https://v6.exchangerate-api.com/v6/40bf2a1c2fcc5b9fb3cfd361/latest/${currency_one}`)
      .then((res) => res.json())
      .then((data) => {
        
        const rate = data.conversion_rates[currencyTwo];
        rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;   //Fetching for 1 SEK is in EUR
  
        secondAmount.value = (firstAmount.value * rate).toFixed(2);
      });
  }

  // Event Listeners
first_currency.addEventListener('change', calculate);
first_amount.addEventListener('input', calculate);
second_currency.addEventListener('change', calculate);
second_amount.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = firstCurrency.value;
  first_currency.value = secondCurrency.value;
  second_currency.value = temp;
  calculate();
});

calculate();*/