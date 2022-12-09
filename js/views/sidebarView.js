/*const types=["starter", "main course", "dessert"];

const reducer = (previousValue, currentValue) => previousValue + currentValue;

function dishType(dish){
    if(dish.dishTypes){
    	const tp= dish.dishTypes.filter(value => types.includes(value));
    	if(tp.length)
	    return tp[0];
    }
    return "";
}

function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
	if(ai < bi)
		return(-1)
	if(ai > bi)
		return(1)
	if(ai == bi)
		return(0)
}

function getTotalPrice(dishes, guests){
	let totalPrice = 0;
	dishes.forEach(dish=>{totalPrice = totalPrice + dish.pricePerServing * guests})
	return totalPrice
}

function SidebarView(props){
	return (
		
		<div>
			<div>
				Number of guests:
			</div>
			<button disabled={props.guests <= 1} onClick={ event=> props.setGuests(props.guests - 1)} > 
				-
			</button>
			{props.guests}
			<button onClick={ event=> props.setGuests(props.guests + 1)} >
				+
			</button>
			<table>
				<tbody>{ 
					[...props.dishes].sort(compareDishes).map(dish=>
						<tr key = {dish.id}>
							<td>
								<button onClick={ event=> props.removeDish(dish)} >X</button>
							</td>
							<td>
							<a href="" onClick={e=>{ e.preventDefault();
								props.dishChoice(dish.id);
								window.location.hash="#details"}
							}>{dish.title}</a>
							</td>
							<td>
								{dishType(dish)}
							</td>
							<td>
								dishPrice = {(dish.pricePerServing * props.guests).toFixed(2)}
							</td>
						</tr>
				)}
					<tr>
						<td></td>
						<td>
							total
						</td>
						<td></td>
						<td>
							{getTotalPrice(props.dishes, props.guests).toFixed(2)}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

/*Promise.all(
    [ DishSource.getDishDetails(523145), 
     DishSource.getDishDetails(787321),
     DishSource.getDishDetails(452179)]
).then(values=> ReactDOM.render(
    <SidebarView guests={5} 
                 dishes={values} 
                 removeDish={id=> console.log("user wants to remove dish with ID ", id)} />
      , document.getElementById("app") )  
)*/