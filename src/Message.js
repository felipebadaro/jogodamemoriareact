import "./Message.css";

function Message({ text }) {
  return (
    <>
      <div className="message">
        <h3>{text}</h3>
      </div>
    </>
  );
}

export default Message;
