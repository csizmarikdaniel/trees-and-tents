import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

var fak = ["", "2;4", "", "1;2", "5"]; //soronként az oszlop száma ahol fa van(1-től kezdődik mert a 0 indexen a szám van)
var szamok = ["20111", "11021"]; //sor van elobb
var szelesseg = 5;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);

function Square(props) {
  switch (props.type) {
    case "tree":
      return <div className="tree" onClick={() => props.onClick("tree")}></div>;
    case "tent":
      return <div className="tent" onClick={() => props.onClick("tent")}></div>;
    case "grass":
      return (
        <div className="grass" onClick={() => props.onClick("grass")}></div>
      );
    case "number":
      return <div className="number">{props.number}</div>
    default:
      return (
        <div className="empty" onClick={() => props.onClick("empty")}></div>
      );
  }
}

function Board() {
  for(let i = 0; i<=szelesseg; i++){
    for(let j = 0; j<=szelesseg; j++){
      if(i==0 )
    }
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
