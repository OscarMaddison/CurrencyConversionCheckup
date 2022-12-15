class CurrenciesModel {
	constructor() {
        this.observers = [];
		this.firstCurrency = document.getElementById('currency-one');
        this.secondCurrency = document.getElementById('currency-two');
        this.firstAmount = document.getElementById('amount-one');
        this.secondAmount = document.getElementById('amount-two');
	}

    addObserver(callback) {
        this.observers = [...this.observers, callback]
    }

    removeObserver(callback) {
        function removeCheck(arg) {
            return callback !== arg
        }
        this.observers.filter(removeCheck)
    }

    notifyObservers() {
        this.observers.forEach(cb => { try { cb() } catch (error) { console.log(error) } })
    }

    setFirstCurrency(currency) {
        this.firstCurrency = currency;
        this.notifyObservers();
    }

    setSecondCurrency(currency) {
        this.secondCurrency = currency;
        this.notifyObservers();
    }

    setFirstAmount(amount) {
        this.firstAmount = amount;
        this.notifyObservers();
    }

    setSecondAmount(amount) {
        this.secondAmount = amount;
        this.notifyObservers();
    }


}