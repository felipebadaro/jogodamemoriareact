// import logo from './logo.svg';
import "./Board.css";
import Card from "./Card";
import Menu from "./Menu";
import { cardList } from "./CardList";
import { shuffle } from "./Utils";
import { useEffect, useState } from "react";

function Board() {
  const [sortedCards, setSortedCards] = useState(cardList);

  const sort = () => {
    setSortedCards(shuffle(cardList));
  };

  useEffect(() => {
    sort();
  }, []);

  return (
    <>
      <div className="board">
        {sortedCards.map((card) => {
          return <Card key={card.id} {...card}></Card>;
        })}
      </div>
      <Menu />
    </>
  );
}

export default Board;
