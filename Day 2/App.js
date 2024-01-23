import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "Hello Sachin Shelke"),
        React.createElement("h2", {}, "Hello Line 2"),
        ]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Hello Line 1"),
        React.createElement("h2", {}, "Hello Line 2"),
        ])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
