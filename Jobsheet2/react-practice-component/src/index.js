import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloComponent from "./components/HelloComponent";

// function HelloComponent() {
//   return <p className="paragraph">Hello Component! this is me, Omar!</p>;
// }
// class StateFullComponent extends React.Component {
//   render() {
//     return (
//       <p className="paragraph">StateFullComponent! Hello, this is me, Omar!</p>
//     );
//   }
// }
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <HelloComponent />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
