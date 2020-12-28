import React from "react";
import ReactDom from "react-dom";

//JSX rules
//single return element
//close every element
// use camel case for html attributes
//className instead of class

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world from arrow function jsx")
//   );
// };

// nested components

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>Hashim Aziz</h1>;

const Message = () => {
  return <p>This is my Message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
