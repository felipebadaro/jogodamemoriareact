// import logo from './logo.svg';
import "./Menu.css";

function Menu({ reset }) {
  const handleClick = () => {
    reset();
  };
  return (
    <>
      <div className="menu">
        <button
          type="button"
          className="resetBtn"
          onClick={() => handleClick()}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}

export default Menu;
