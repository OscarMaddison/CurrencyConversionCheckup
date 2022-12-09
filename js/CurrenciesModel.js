const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');
const first_currency = document.getElementById('currency-one');
const second_currency = document.getElementById('currency-two');
const first_amount = document.getElementById('amount-one');
const second_amount = document.getElementById('amount-two');
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
class CurrenciesModel{
 
calculate();

}
