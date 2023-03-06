import TwitterIcon from "../../img/twitter.png";
import Facebook from "../../img/facebook.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Pinterest from "../../img/pinterest.png";
import Coin from "../../img/coin.png";
import Accessibility from "../../img/accessibility.png";
import Language from "../../img/language.png";
import "./footer.scss";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programmng & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Site Map</span>
          </div>

          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programmng & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Site Map</span>
          </div>

          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programmng & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Site Map</span>
          </div>

          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programmng & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Site Map</span>
          </div>

          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programmng & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Site Map</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>TheJobs</h2>
            <span>&#169;TheJobs International Ltd. {year}</span>
          </div>
          <div className="right">
            <div className="social">
              <img src={TwitterIcon} alt="" />
              <img src={Facebook} alt="" />
              <img src={LinkedIn} alt="" />
              <img src={Pinterest} alt="" />
              <img src={Instagram} alt="" />
            </div>
            <div className="link">
              <img src={Language} alt="" />
              <span>English</span>
            </div>

            <div className="link">
              <img src={Coin} alt="" />
              <span>USD</span>
            </div>
            <img src={Accessibility} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
