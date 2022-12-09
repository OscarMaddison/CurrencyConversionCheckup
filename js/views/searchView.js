/*function eventPrinter(evt){ console.log(evt);}

function SearchFormView(props){
	return(
		<div>
			<div>
				Welcome to the dinner planner!
			</div>
			<input onInput={ e=> props.onText(e.target.value) } />
			<select onChange={e=> props.onDishType(e.target.value)} >
				<option>Choose:</option>
				{props.options.map(
					function(opt){return <option key={opt}> {opt} </option>})}
			</select>
			<button onClick={ event=> props.onSearch() } >
				search
			</button>
			<button onClick={ event=> window.location.hash="#summary"} >
				summary
			</button>
		</div>
	)
}

function SearchResultsView(props){return(<div>{
	props.searchResults.map(
		function(dish){return (<span 
		onClick={e=>{console.log(e.target); props.dishChosen(dish.id); window.location.hash="#details";}}
		class ="searchResult" key = {dish.id}>
			<img src= {"https://spoonacular.com/recipeImages/" + dish.image}  height = "100" ></img>
			<div class = "title"> {dish.title} </div>
		</span>);
		}
	)
}</div>);}*/