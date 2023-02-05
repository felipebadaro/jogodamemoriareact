// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./Card.css";
import { maxFlippedCards } from "./Config.js";

function Card({
  id,
  img,
  description,
  flippedCards,
  matchingCards,
  setFlippedCards,
}) {
  const [flipStatus, setFlipStatus] = useState("");

  useEffect(() => {
    console.log("observando o flippedcards");
    flippedCards.length >= maxFlippedCards
      ? console.log("flippedcards chegou no maximo")
      : console.log("flippedcards ainda nao chegou no maximo");
  }, [flippedCards]);

  const clickHandler = (e) => {
    const cardText = e.target.nextElementSibling.children[1].innerHTML;
    console.log("flippedCards.length", flippedCards.length);
    if (flippedCards.length < maxFlippedCards) {
      flip();
      let newFlipperCards = [...flippedCards, cardText];
      setFlippedCards(newFlipperCards);
    }
  };

  const flip = () => {
    setFlipStatus(flipStatus ? "" : "flip");
  };

  return (
    <>
      <div id={id} className="flip-card">
        <div className={`flip-card-inner ${flipStatus}`}>
          <div className="flip-card-front" onClick={clickHandler}>
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
