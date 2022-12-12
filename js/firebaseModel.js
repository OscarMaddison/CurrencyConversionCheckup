const REF= "currenciesModel"+31 ; //  56 is your TW2_TW3 group number
function persistModel(model) {
	let loadingFromFirebase = false;  // boolean flag, used in a JS closure
	model.addObserver(function () {
		if (loadingFromFirebase === true) return;
         	firebase.database().ref(REF).set({  // object literal
			firstCurrency: model.firstCurrency,
			secondCurrency: model.secondCurrency,
			firstAmount: model.firstAmount,
			secondAmount: model.secondAmount
		});
    });
	firebase.database().ref(REF).on("value", function (data) {
		 loadingFromFirebase = true;
		try {
			if (data.val()) {
				model.setNumberOfGuests(data.val().guests);
				model.setDishes(data.val().dishes || []);
				model.setCurrentDish(data.val().currentDish || null);
			}
		}
		catch (e) { console.log(e); }
		finally { loadingFromFirebase = false; }

	});

}