/*function DetailsView(props){ console.log(props);
	return (
		<div>
			<div>
				<div>
						<img src= {props.dish.image}  height = "100" />
				</div>
				<div>
					Price: {props.dish.pricePerServing}
				</div>
				<div>
						for {props.people} guests: {props.dish.pricePerServing}
				</div>
			</div>
			<div>
				{props.dish.extendedIngredients.map(
					x =>
					<div key = {x.id}>
							{x.name}: {x.measures.metric.amount} {x.measures.metric.unitShort}
					</div>
				)}
			</div>
			<div>
				{props.dish.instructions}
			</div>
			<div>
				{props.dish.sourceURL}
			</div>
			<button disabled = {props.isDishInMenu} onClick={ event=> {props.dishAdded();
				window.location.hash="#search";
			}} >Add to menu!</button>
			<button onClick={ event=> window.location.hash="#search"
			} >cancel</button>
		</div>
	);
}*/