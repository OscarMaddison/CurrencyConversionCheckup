
const first_currency = document.getElementById('currency-one');
const second_currency = document.getElementById('currency-two');
const first_amount = document.getElementById('amount-one');
const second_amount = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetchar exchange rates
function calculate() {
    
    const currency_one = first_currency.value;
    const currency_two = second_currency.value;
  
    fetch(`https://v6.exchangerate-api.com/v6/40bf2a1c2fcc5b9fb3cfd361/latest/${currency_one}`)
      .then((res) => res.json())
      .then((data) => {
        
        const rate = data.conversion_rates[currency_two];
        rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;   //Fetching for 1 SEK is in EUR
  
        second_amount.value = (first_amount.value * rate).toFixed(2);
      });
  }

  // Event Listeners
first_currency.addEventListener('change', calculate);
first_amount.addEventListener('input', calculate);
second_currency.addEventListener('change', calculate);
second_amount.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = first_currency.value;
  first_currency.value = second_currency.value;
  second_currency.value = temp;
  calculate();
});

calculate();