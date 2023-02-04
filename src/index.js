import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./Board";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h2 className="title">Jogo da memória</h2>
    <Board />
  </React.StrictMode>
);
