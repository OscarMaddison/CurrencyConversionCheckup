/*function ExchangeRatePresenter(props){   // assume a model prop
    const [firstCurrency, setFirstCurrency]=React.useState(props.model.firstCurrency);
    const [secondCurrency, setSecondCurrency]=React.useState(props.model.secondCurrency);
    const [firstAmount, setFirstAmount]=React.useState(props.model.firstAmount);
    const [secondAmount, setSecondAmount]=React.useState(props.model.secondAmount);

    React.useEffect( function(){  
        function obs(){ setFirstCurrency(props.model.firstCurrency); setSecondCurrency(props.model.secondCurrency); setFirstAmount(props.model.firstAmount); setSecondAmount(props.model.secondAmount); }
        props.model.addObserver(obs);                               // 1. subscribe
        return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
    }, [])                                            //  stricter: [props.model] ! 

    return <currencySource.calculate();/>
}*/