import React from "react";
import SerachIcon from "../../../public/img/search.png";
import ManImg from "../../../public/img/man.png";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <div className="title">
            <h1>Find the perfect freelance services for your business</h1>
          </div>
          <div className="search">
            <div className="searchInput">
              <img src={SerachIcon} alt="" />
              <input type="text" placeholder="Try building mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={ManImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
