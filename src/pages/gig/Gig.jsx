import Slider from "../../components/slide/Slider";
import Star from "../../img/star.png";
import "./gig.scss";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <div className="breadCrumbs">TheJobs {">"} GRAPHICS & DESIGN</div>
          <h1>I wil create ai generated art for you</h1>

          <div className="user">
            <img src="" alt="" />
            <span>John Doe</span>
            <div className="stars">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Gig;
