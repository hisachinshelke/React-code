import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading">This is jsx heading!!</h1>
console.log(jsxHeading)

//const headingElement = <h1 id="heading">This is Heading component!!</h1>

const TitleComponent = () => {
    return (
        <h1 id="title">This is from Title Component!!</h1>
    );
}

const FooterComponent = function () {
    return (
        <h3>Footer component</h3>
    );
}

const titleElement = (
    <h1>This is from title element!!</h1>
)

const name = "Sachin Baburao Shelke!!"

const HeadingComponent = () => (
    <div className="container">
        <TitleComponent />
        <h1 id="heading">This is Heading component!!</h1>
        <h2>My Name is {name}</h2>
        {10 + 80}
        {titleElement}
        <FooterComponent />
    </div>
)


console.log(jsxHeading)


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading)

root.render(<HeadingComponent />)