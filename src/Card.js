// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./Card.css";
import { removeElemetFromArray } from "./Utils";

function Card({ id, img, description, cardStatus, addFlippedCard }) {
  // let cardStatus = flippedCards.includes(id) ? "flip" : "";
  // console.log("cardStatus", cardStatus);

  const clickHandler = () => {
    addFlippedCard((prevFlippedCards) => [...prevFlippedCards, id]);
  };

  return (
    <>
      <div id={id} className="flip-card">
        <div className={`flip-card-inner ${cardStatus}`}>
          <div className="flip-card-front" onClick={() => clickHandler()}>
            <img
              className="logo"
              src="https://pebmed.com.br/wp-content/themes/Pebmed-Theme/sahifa/images/logo-pebmed.png"
              alt=""
            />
          </div>
          <div className="flip-card-back">
            <img src={img} alt="Avatar" />
            <span className="description">{description}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
