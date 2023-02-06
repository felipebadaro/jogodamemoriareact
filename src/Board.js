// import logo from './logo.svg';
import "./Board.css";
import Card from "./Card";
import Menu from "./Menu";
import { cardList } from "./CardList";
import { shuffle } from "./Utils";
import { useEffect, useState } from "react";
import { maxFlippedCards } from "./Config";
import { isCompositeComponent } from "react-dom/test-utils";

function Board() {
  const [sortedCards, setSortedCards] = useState(cardList);
  const [flippedCards, setFlippedCards] = useState([]);
  // const [matchingCards, setMatchingCards] = useState([]);
  // const [lastCardFlipped, setLastCardFlipped] = useState("");

  useEffect(() => {
    setSortedCards(shuffle(cardList));
  }, []);

  useEffect(() => {
    console.log(flippedCards);
    if (flippedCards.length == maxFlippedCards) {
      handleChoice();
    }
  }, [flippedCards]);

  const handleChoice = () => {
    setTimeout(() => {
      compare() ? handleMatching() : handleError();
      compare();
    }, 1000);
  };

  const handleError = () => {
    console.log("Entrei no handle Error!");
    setFlippedCards([]);
  };

  const handleMatching = () => {
    console.log("Entrei no handle Matching!");
  };

  const compare = () => {
    const firstElement = flippedCards[0];
    const secondElement = flippedCards[1];
    console.log(
      "flippedCards[0] description",
      sortedCards[firstElement].description
    );
    console.log(
      "flippedCards[1] description",
      sortedCards[secondElement].description
    );
    return (
      sortedCards[firstElement].description ===
      sortedCards[secondElement].description
    );
  };

  const renderCard = (id) => {
    return (
      <Card
        key={id}
        id={id}
        img={sortedCards[id].img}
        description={sortedCards[id].description}
        cardStatus={flippedCards.includes(id) ? "flip" : ""}
        addFlippedCard={setFlippedCards}
        // onClick={() => clickHandler(sortedCards[id].description)}
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
        {renderCard(3)}
        {renderCard(4)}
      </div>
      <Menu />
    </>
  );
}

export default Board;
