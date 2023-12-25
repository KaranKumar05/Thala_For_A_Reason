import "./card.css";

// Button from react-share package
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
const Card = ({ cardData, numCard, cardSum }) => {
  return (
    <div className="cardContainer">
      <div className="container">
        <h3>{cardData}</h3>
        <div>
          {cardData ? (
            <div className="textCardContainer">
              <h3>THALA FOR A REASON</h3>
              <br />
              <div>
                <div>
                  {numCard || cardData ? (
                    <div className="imageContainer">
                      <div className="images"></div>
                    </div>
                  ) : null}
                </div>
                <h4>Share with Your Friends</h4>
                <div className="shareButton">
                  <span>
                    <FacebookShareButton>
                      <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>
                  </span>
                  <span>
                    <WhatsappShareButton>
                      <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                  </span>
                  <span>
                    <TwitterShareButton>
                      <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>
                  </span>
                  <span>
                    <TelegramShareButton>
                      <TelegramIcon size={40} round={true} />
                    </TelegramShareButton>
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <h3>{cardSum !== 7 ? null : numCard}</h3>
        <div className="numberCardContainer">
          {cardSum !== 7 ? null : (
            <div>
              <h3>THALA FOR A REASON</h3>
              <br />
              <div>
                <div>
                  {numCard || cardData ? (
                    <div className="imageContainer">
                      <div className="images"></div>
                    </div>
                  ) : null}
                </div>
                <h4>Share with Your Friends</h4>
                <div className="shareButton">
                  <span>
                    <FacebookShareButton>
                      <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>
                  </span>
                  <span>
                    <WhatsappShareButton>
                      <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                  </span>
                  <span>
                    <TwitterShareButton>
                      <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>
                  </span>
                  <span>
                    <TelegramShareButton>
                      <TelegramIcon size={40} round={true} />
                    </TelegramShareButton>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
