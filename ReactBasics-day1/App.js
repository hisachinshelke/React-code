const heading = React.createElement(
                    "h1", 
                    {id:"heading",
                     prp: "xyz"   
                    }, 
                    "Hello from React code!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);