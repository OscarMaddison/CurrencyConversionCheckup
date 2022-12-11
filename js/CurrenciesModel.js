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
        this.firstCurrency = currency;
        this.notifyObservers();
    }

    setFirstAmount(currency) {
        this.firstCurrency = currency;
        this.notifyObservers();
    }

    setSecondAmount(currency) {
        this.firstAmount = currency;
        this.notifyObservers();
    }


}