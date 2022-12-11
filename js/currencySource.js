const firstCurrency = document.getElementById('currency-one');
const secondCurrency = document.getElementById('currency-two');
const firstAmount = document.getElementById('amount-one');
const secondAmount = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

/*const CurrencySource={
    apiCall() {
		return fetch(`https://v6.exchangerate-api.com/v6/40bf2a1c2fcc5b9fb3cfd361/latest/${currency_one}`)
		// check HTTP response: 
		.then(response=> {if (response.ok) {return response}
		else {throw response.statusText}})
		.then(response => response.json());
    },
    // Fetchar exchange rates
    /*function apiCall() {
        const currencyOne = this.firstCurrency.value;
        const currencyTwo = this.secondCurrency.value;
        
        fetch(`https://v6.exchangerate-api.com/v6/40bf2a1c2fcc5b9fb3cfd361/latest/${currency_one}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currencyTwo];
            rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;   //Fetching for 1 SEK is in EUR
            
            secondAmount.value = (firstAmount.value * rate).toFixed(2);
        });
    }*/

    // Fetchar exchange rates
    function calculate() {
    
        const currencyOne = firstCurrency.value;
        const currencyTwo = secondCurrency.value;
      
        fetch(`https://v6.exchangerate-api.com/v6/40bf2a1c2fcc5b9fb3cfd361/latest/${currencyOne}`)
          .then((res) => res.json())
          .then((data) => {
            
            const rate = data.conversion_rates[currencyTwo];
            rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;   //Fetching for 1 SEK is in EUR
      
            secondAmount.value = (firstAmount.value * rate).toFixed(2);
          });
      }

// Event Listeners
firstCurrency.addEventListener('change', calculate);
firstAmount.addEventListener('input', calculate);
secondCurrency.addEventListener('change', calculate);
secondAmount.addEventListener('input', calculate);



swap.addEventListener('click', () => {
    const temp = firstCurrency.value;
    first_currency.value = secondCurrency.value;
    second_currency.value = temp;
    calculate();
  });
  
  calculate();
