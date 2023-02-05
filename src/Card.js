// import logo from './logo.svg';
import "./Card.css";

function Card() {
  const clickHandler = () => {
    alert("Clicked!");
    flip();
  };

  const flip = () => {
    alert("Fliped!");
  };
  return (
    <>
      <div className="flip-card" onClick={() => clickHandler()}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="logo"
              src="https://pebmed.com.br/wp-content/themes/Pebmed-Theme/sahifa/images/logo-pebmed.png"
              alt=""
            />
          </div>
          <div className="flip-card-back">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <span className="description">Nome qualquer</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
