import React from 'react';
import ReactDOM from 'react-dom/client';
// <!-- Printing Hello World using ReactJs -->
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World From React!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

