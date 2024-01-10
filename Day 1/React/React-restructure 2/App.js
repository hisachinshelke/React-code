

/**
 * 
<div id="parent">
    <div id="child1">
        <h1></h1>
        <h2></h2>
    </div>   
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>  
</div>
 */

const heading = React.createElement( 
    "h1",
    {id:"heading",xyz:"123", pqr:"qweqwe"},
    "Hello world from React!!"
    );

    console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);