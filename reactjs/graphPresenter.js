function GraphPresenter(props){   // assume a model prop
    React.useEffect( function(){  
        function obs(){ setFirstCurrency(props.model.firstCurrency); setSecondCurrency(props.model.secondCurrency); setFirstAmount(props.model.firstAmount); setSecondAmount(props.model.secondAmount); }
        props.model.addObserver(obs);                               // 1. subscribe
        return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
    }, [])                                            //  stricter: [props.model] !                                             //  stricter: [props.model] !

    console.log('presenter function reached')

    return (GraphView)
}