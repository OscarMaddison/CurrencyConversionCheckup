/*function SummaryPresenter(props) {  // assume a model prop
    const [number, setNumber]=React.useState(props.model.numberOfGuests);
    const [dishes, setDishes]=React.useState(props.model.dishes);
    React.useEffect( function(){  
        function obs(){ setNumber(props.model.numberOfGuests); setDishes(props.model.dishes);}
        props.model.addObserver(obs);                               // 1. subscribe
        return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
    }, [])
    
    return <SummaryView persons={props.model.numberOfGuests}
        ingredients={getIngredients(props.model.dishes)}
    />


}*/