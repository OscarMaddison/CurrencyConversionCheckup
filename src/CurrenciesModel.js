javascriptclass DinnerModel {
	constructor(guests = 2) {
		this.observers = []
		this.setNumberOfGuests(guests)
		this.dishes = []
		this.currentDish = null;
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
	setDishes(dishes) {
		this.dishes = [...dishes];
		this.notifyObservers();
	}

	setNumberOfGuests(x){if (x <= 0 || !Number.isInteger(x)) {throw 'faulty number';} else {this.numberOfGuests = x;}
		this.notifyObservers()}
	addToMenu(dish) { 
		this.dishes = [...this.dishes, dish]
		this.notifyObservers()
	};
	removeFromMenu(dishData) {
		this.dishes = this.dishes.filter( d => d.id != dishData.id)
		this.notifyObservers()
	};
	setCurrentDish(id){
		if(this.currentDish === id) return;
		this.currentDish = id
		this.currentDishDetails= null;
		this.currentDishError= null;
		this.notifyObservers();
		
		/*React.useEffect(function(){  
			function obs(){ setNumber(props.model.numberOfGuests); setDishes(props.model.dishes);}
			props.model.addObserver(obs);                               // 1. subscribe
			return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
		}, [])*/

		if(DishSource.getDishDetails(this.currentDish)){
			DishSource.getDishDetails(id)
			.then(result => {
				if(this.currentDish === id){
					this.currentDishDetails = result;
					this.notifyObservers();
				/* if currentDish is still id, set currentDishDetails 
				from promise results and notify observers */
				}
			})
   			.catch(error => {
				if(this.currentDish === id){
		   			this.currentDishError = error;
					this.notifyObservers();
		   		/* if currentDish is still id, set currentDishError 
				from promise error and notify observers */
			   }
			})
		}
	};
}

function getIngredients(dishArr){
   const result={}; // object used as mapping
   dishArr.forEach(d=> d.extendedIngredients.forEach(i=>{
        if(!result[i.id])
			// ingredient not taken into account yet
            // associate the ingredient with the ID
            // {...i } is a *copy* of the ingredient (spread syntax)
			// we copy just in case, as we’ll change the object below
			result[i.id]={...i};
	   else
	     {result[i.id].amount = result[i.id].amount + i.amount};
   }))
  return Object.values(result);
}