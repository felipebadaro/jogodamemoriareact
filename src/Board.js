// import logo from './logo.svg';
import "./Board.css";
import Card from "./Card";
import Menu from "./Menu";
import Message from "./Message";
import { cardList } from "./CardList";
import { shuffle } from "./Utils";
import { useEffect, useState } from "react";
import { maxFlippedCards } from "./Config";

function Board() {
  const [sortedCards, setSortedCards] = useState(cardList);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchingCards, setMatchingCards] = useState([]);
  const [textMessage, setTextMessage] = useState("");

  useEffect(() => {
    setSortedCards(shuffle(cardList));
  }, []);

  useEffect(() => {
    if (flippedCards.length == maxFlippedCards) {
      handleChoice();
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchingCards.length == sortedCards.length) handleEndGame();
  }, [matchingCards]);

  const handleChoice = () => {
    setTimeout(() => {
      handleCompare() ? handleMatching() : handleMistake();
      handleCompare();
    }, 1000);
  };

  const handleEndGame = () => {
    setTextMessage("Você ganhou!");
  };

  const handleMistake = () => {
    setFlippedCards([]);
  };

  const handleMatching = () => {
    let newMatchingCards = matchingCards;
    newMatchingCards = newMatchingCards.concat(flippedCards);
    setMatchingCards(newMatchingCards);
    setFlippedCards([]);
  };

  const handleCompare = () => {
    const firstElement = flippedCards[0];
    const secondElement = flippedCards[1];
    return (
      sortedCards[firstElement].description ===
      sortedCards[secondElement].description
    );
  };

  const handleReset = () => {
    setFlippedCards([]);
    setMatchingCards([]);
    setTextMessage("");
    setTimeout(() => {
      setSortedCards(shuffle(cardList));
    }, 500);
  };

  const renderCard = (id) => {
    return (
      <Card
        key={id}
        id={id}
        img={sortedCards[id].img}
        description={sortedCards[id].description}
        cardStatus={
          flippedCards.includes(id) || matchingCards.includes(id) ? "flip" : ""
        }
        flippedCards={flippedCards}
        addFlippedCard={setFlippedCards}
      />
    );
  };

  return (
    <>
      <div className="board">
        {/* {sortedCards.map((card) => {
          return (
            <Card
              key={card.id}
              {...card}
              flippedCards={flippedCards}
              onClick={() => clickHandler(card.id)}
            />
          );
        })} */}

        {renderCard(0)}
        {renderCard(1)}
        {renderCard(2)}
        {renderCard(3)}
        {renderCard(4)}
        {renderCard(5)}
        {renderCard(6)}
        {renderCard(7)}
        {renderCard(8)}
        {renderCard(9)}
        {renderCard(10)}
        {renderCard(11)}
      </div>
      <Menu reset={handleReset} />
      <Message text={textMessage} />
    </>
  );
}

export default Board;
