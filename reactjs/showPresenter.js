/*function Show(props) {
    const [hashState, setHash] = React.useState(window.location.hash);
   

React.useEffect(function () {
    const listener = function () { setHash(window.location.hash); }
    window.addEventListener("hashchange", listener);   // 1 subscribe
    return function () { window.removeEventListener("hashchange", listener) } // 2
}, []);
/*return <span>{hashState}</span>; 
    return (
        <div class={(props.hash === hashState) ? "" : "hidden"} //if (?) else (:)
        > {props.children}
        </div >
    );}
    */
