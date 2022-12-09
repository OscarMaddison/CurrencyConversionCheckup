/*function DetailsPresenter(props){   // assume a model prop
    const [currentDish, setDish]=React.useState(props.model.currentDish);
    const [currentDishDetails, setDishDetails]=React.useState(props.model.currentDishDetails);
    const [currentDishError, setDishError]=React.useState(props.model.currentDishError);
    const [number, setNumber]=React.useState(props.model.numberOfGuests);
    const [dishes, setDishes]=React.useState(props.model.dishes);

    React.useEffect( function(){  
        function obs(){ setDish(props.model.currentDish); setDishDetails(props.model.currentDishDetails); setDishError(props.model.currentDishError); setNumber(props.model.numberOfGuests); setDishes(props.model.dishes);}
        props.model.addObserver(obs);                               // 1. subscribe
        return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
    }, [])                                            //  stricter: [props.model] ! 
    
    return promiseNoData(currentDish, currentDishDetails, currentDishError) || <DetailsView
        isDishInMenu={props.model.dishes.find(d=>d.id === props.model.currentDish)}
        people={number}
        dish={currentDishDetails}
        dishAdded={() => props.model.addToMenu(props.model.currentDishDetails)}
    />

    /*return <SidebarView guests={number}
        dishes={dishes}
        setGuests={x => props.model.setNumberOfGuests(x)}
        addDish={x => props.model.addDish(x)}
        removeDish={x => props.model.removeFromMenu(x)}
        dishAdded={() => props.model.addToMenu(props.model.currentDishDetails)}

    />
}
*/