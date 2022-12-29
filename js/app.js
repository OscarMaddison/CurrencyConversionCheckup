function RenderTest(){ console.log("Vue sub-component render test"); return false; }
const App= (props)=>

    <div class="flexParent">
        console.log('app.js rad 5');
        <div class="currencies"><Show hash="#currencies"><CurrenciesPresenter model={props.model} /></Show></div>
    </div>


function defaultRoute(){
    if(!["#currencies"]
    .find((knownRoute)=> window.location.hash === knownRoute)) window.location.hash="#currencies";
}
defaultRoute(); // when the application loads, set the default route!
window.addEventListener("hashchange", defaultRoute);