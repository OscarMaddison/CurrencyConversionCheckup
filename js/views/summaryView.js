/*function SummaryView(props){
    return (  // a lonely return on a line returns undefined. Parentheses needed
        
		<div>
			<div>
            	Dinner for <span title="nr. guests">{props.persons}</span> guests:
			</div>
			<div>
				<table>
					<tbody>
						<tr>
							<td>
								Ingredient
							</td>
							<td>
								Aisle
							</td>
							<td>
								Quantity
							</td>
						</tr>
						{[...props.ingredients].sort(compareIngredients).map(ingredient=>
							<tr>
								<td>
									{ingredient.name}
								</td>
								<td>
									{ingredient.aisle}
								</td>
								<td>
									{(ingredient.measures.metric.amount * props.persons).toFixed(2)}{ingredient.measures.metric.unitShort}
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
			<div>
				<button onClick={ event=> window.location.hash="#search"} >
					back to search
				</button>
			</div>
		</div>
    );
}

function compareIngredients(a,b){
    if(a.aisle < b.aisle)
	   return -1;
    if(a.aisle > b.aisle)
	   return 1;
	if(a.name < b.name)
	   return -1;
    if(a.name > b.name)
	   return 1;
    throw error;
}*/
