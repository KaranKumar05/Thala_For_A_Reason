import "./card.css";

const Card = ({ cardData, numCard, cardSum }) => {
  return (
    <div className="cardContainer">
      <div className="container">
        <h3>{cardData}</h3>
        <div>{cardData ? <button>Share</button> : null}</div>
        <h3>{cardSum !== 7 ? null : numCard}</h3>
        <div>{cardSum !== 7 ? null : <button>Share</button>}</div>
      </div>
      <div>
        {numCard || cardData ? (
          <div className="imageContainer">
            <div className="images"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
