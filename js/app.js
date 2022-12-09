/*function RenderTest(){ console.log("Vue sub-component render test"); return false; }
const App= (props)=>

    <div class="flexParent">
        <div class="sidebar debug"><SidebarPresenter model={props.model} /></div>
        <div class="mainContent debug"><Show hash="#search"><SearchPresenter model={props.model} /></Show>
                                       <Show hash="#details"><DetailsPresenter model={props.model} /></Show>
                                       <Show hash="#summary"><SummaryPresenter model={props.model} /></Show>
            
           </div>
    </div>


function defaultRoute(){
    if(!["#search", "#summary", "#details"]
.find((knownRoute)=> window.location.hash === knownRoute)) window.location.hash="#search";
}
        defaultRoute(); // when the application loads, set the default route!
     window.addEventListener("hashchange", defaultRoute);
     */