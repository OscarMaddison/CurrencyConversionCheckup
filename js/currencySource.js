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
        const currOne = this.firstCurrency.value;
        const currTwo = this.secondCurrency.value;
        
        fetch(`https://v6.exchangerate-api.com/v6/40bf2a1c2fcc5b9fb3cfd361/latest/${currency_one}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currTwo];
            rateElement.innerText = `1 ${currOne} = ${rate} ${currTwo}`;   //Fetching for 1 SEK is in EUR
            
            secondAmount.value = (firstAmount.value * rate).toFixed(2);
        });
    }*/

    // Fetchar exchange rates
    function calculate() {
    
        const currOne = firstCurrency.value;
        const currTwo = secondCurrency.value;
      
        fetch(`https://v6.exchangerate-api.com/v6/40bf2a1c2fcc5b9fb3cfd361/latest/${currOne}`)
          .then((response) => response.json())
          .then((data) => {
            
            const rate = data.conversion_rates[currTwo];
            rateElement.innerText = `1 ${currOne} = ${rate} ${currTwo}`;   // This makes it able for us to show for ex. how much 1 SEK is in EUR.
      
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
    firstCurrency.value = secondCurrency.value;
    secondCurrency.value = temp;
    calculate();
  });
  
  calculate();
