/**
 * 
 * 
 * 
 * 
 * 
1.
<div id="parent">
    <div id="child1">
        <h1>Hello Line 1</h1>
    </div>
</div>

2.
<div id="parent">
    <div id="child1">
        <h1>Hello Line 1</h1>
        <h2>Hello Line 2</h2>
    </div>
</div>

3.
<div id="parent">
    <div id="child1">
        <h1>Hello Line 1</h1>
        <h2>Hello Line 2</h2>
    </div>

    <div id="child2">
        <h1>Hello Line 1</h1>
        <h2>Hello Line 2</h2>
    </div>
</div>


 */

/*
const heading = React.createElement("h1", {}, "Hello Sachin Using React!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/

//1 . Solution
/*
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div", 
        { id: "child" }, 
        React.createElement(
            "h1", {}, 
            "Hello Line 1"
            )));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

//2. Solution
/*const parent = React.createElement("div", { id: "parent" },
    React.createElement(
        "div", { id: "child1" },
        [
            React.createElement("h1", {}, "Hello Line 1"),
            React.createElement("h2", {}, "Hello Line 2")
        ]
    ))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)*/

//3. Solution
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "Hello Line 1"),
        React.createElement("h2", {}, "Hello Line 2"),
        ]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Hello Line 1"),
        React.createElement("h2", {}, "Hello Line 2"),
        ])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
