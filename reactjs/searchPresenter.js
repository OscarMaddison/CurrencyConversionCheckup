/*function SearchPresenter(props){
    // parameter: promise  
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);
    const [promise, setPromise]= React.useState(null);
    const [searchQuery, setSearchQuery]= React.useState("");
    const [searchType, setSearchType]= React.useState("");


    React.useEffect(
        function(){ 
            setData(null); setError(null);
            let cancelled=false;
	        if(promise) promise.then(dt=> {if(!cancelled) setData(dt)}).catch(er=>{if(!cancelled) setError(er)});
        }, [promise]
    );

    React.useEffect(
        function(){
            setPromise(DishSource.searchDishes({}));
        }, []
    )

    return(
        <div>
            <SearchFormView options={["starter", "main course", "dessert"]}
                onText={txt=>setSearchQuery(txt)} onDishType={dishType=>setSearchType(dishType)}
                onSearch={()=>setPromise(DishSource.searchDishes({query: searchQuery, type: searchType}))}
            />
            {promiseNoData(promise, data, error) ||
            <SearchResultsView searchResults={data} dishChosen ={dish=>props.model.setCurrentDish(dish)}/>}
        </div>
    )
}*/
