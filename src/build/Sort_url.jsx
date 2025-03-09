import React, { useRef, useState } from "react";
import images from './Images'
import {motion} from 'framer-motion'

function Sorting_URL() {
  const [shortLink, setShortLink] = useState("");
  const [buttonClicked, setButtonClicked] = useState(null);
  const [isLinkLoaded, setIsLinkLoaded] = useState(false)

  const handle = () => {
    setShortLink("");
    setIsLinkLoaded(true)
  };

  const isValidUrl = () => {
    try {
      new URL(shortLink);
      return true;
    } catch (error) {
      return false;
    }
  };
  
  function getRandomString(length) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
  
  let githubLink = `https://rel.ink/${useRef(getRandomString(6)).current}`;
  let twitterLink = `https://rel.ink/${useRef(getRandomString(6)).current}`;
  let linkedInLink = `https://rel.ink/${useRef(getRandomString(6)).current}`;

  const copyLink = (id, accountLink) => {
    setButtonClicked(id);
    setTimeout(() => {
      setButtonClicked(null);
    }, 3000);
    return navigator.clipboard.writeText(accountLink);
  };

  return (
    <div className="sorten">
      <div className="pasteLink-cont">
        <>
          <input
            value={shortLink}
            onChange={(e) => setShortLink(e.target.value)}
            type="text"
            placeholder="Shorten a link here..."
          />
          {!isValidUrl(shortLink) ? <small>Please add a shortLink</small> : null}
        </>
        <button id="shorten-it-button" disabled={!isValidUrl(shortLink)} onClick={handle}>Shorten It!</button>
      </div>
      {isLinkLoaded ? (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          className="sortLinks-container"
        >
          <div className="githubLink">
            <h5>https://www.frontendmentor.io</h5>
            <div>
              <h5>{githubLink}</h5>
              <button
                className={buttonClicked === 1 ? "copied" : null}
                onClick={() => copyLink(1, githubLink)}
              >
                {buttonClicked === 1 ? "copied !" : "copy"}
              </button>{" "}
            </div>
          </div>
          <div className="twitterLink">
            <h5>https://www.twitter.com</h5>
            <div>
              <h5>{twitterLink}</h5>
              <button
                className={buttonClicked === 2 ? "copied" : null}
                onClick={() => copyLink(2, twitterLink)}
              >
                {buttonClicked === 2 ? "copied !" : "copy"}
              </button>
            </div>
          </div>
          <div className="linkedInLink">
              <h5>https://www.linkedIn.in</h5>
              <div>
              <h5>{linkedInLink}</h5>
              <button
                className={buttonClicked === 3 ? "copied" : null}
                onClick={() => copyLink(3, linkedInLink)}
              >
                {buttonClicked === 3 ? "copied !" : "copy"}
              </button>{" "}
            </div>
          </div>
        </motion.div>
      ) : null}

      <h2
        style={!isLinkLoaded ? { paddingTop: "10rem" } : null}
        className="advanced"
      >
        Advanced Statistics
      </h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="label-container">
        <div className="brand">
          <img src={images.icon_brand_recognition} alt="" />
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="records">
          <img src={images.icon_detailed_records} alt="" />
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className="customize">
          <img src={images.icon_fully_customizable} alt="" />
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sorting_URL;
