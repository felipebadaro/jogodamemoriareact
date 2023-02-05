// import logo from './logo.svg';
import "./Card.css";

function Card({ id, img, description }) {
  const clickHandler = () => {
    alert("Clicked!");
    flip();
  };

  const flip = () => {
    alert("Fliped!");
  };
  return (
    <>
      <div id={id} className="flip-card" onClick={() => clickHandler()}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
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
