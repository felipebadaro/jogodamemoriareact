// import logo from './logo.svg';
import "./Board.css";
import Card from "./Card";
import Menu from "./Menu";

function Board() {
  return (
    <>
      <div className="board">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Menu />
    </>
  );
}

export default Board;
