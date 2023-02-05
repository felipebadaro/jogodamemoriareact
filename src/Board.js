// import logo from './logo.svg';
import "./Board.css";
import Card from "./Card";
import Menu from "./Menu";
import { cardList } from "./CardList";
import { shuffle } from "./Utils";
import { useEffect, useState } from "react";
import { maxFlippedCards } from "./Config";

function Board() {
  // const [originalCards, setOriginalCards] = useState(cardList);
  const [sortedCards, setSortedCards] = useState(cardList);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchingCards, setMatchingCards] = useState([]);

  useEffect(() => {
    setSortedCards(shuffle(cardList));
  }, []);

  useEffect(() => {
    if (flippedCards.length === maxFlippedCards) {
      handleChoice();
    } else {
      return;
    }
  }, [flippedCards]);

  const compareCards = () => flippedCards[0] === flippedCards[1];

  const handleChoice = () => {
    console.log("dentro do handleChoice");
    console.log("Os 2 cards são iguais?", compareCards());
    if (!compareCards()) {
      handleMistake();
    } else {
      handleMatching();
    }
    // setFlippedCards([]);
  };

  const handleMatching = () => {
    // let newMatchingCards = matchingCards;
    // newMatchingCards.push(flippedCards[0]);
    // setMatchingCards(newMatchingCards);
    //desliga o click nos 2
  };

  const handleMistake = () => {
    console.log("dentro do handleMistake");
    // setFlipStatus(flipStatus ? "" : "flip");
  };

  const handleEndGame = () => console.log("Endgame!");

  return (
    <>
      <div className="board">
        {sortedCards.map((card) => {
          return (
            <Card
              key={card.id}
              {...card}
              flippedCards={flippedCards}
              matchingCards={matchingCards}
              setFlippedCards={setFlippedCards}
            ></Card>
          );
        })}
      </div>
      <Menu />
    </>
  );
}

export default Board;
