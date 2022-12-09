class currencySource{
            
			apiCall() {
	
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
		}