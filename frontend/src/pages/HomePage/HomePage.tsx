import "./HomePage.scss";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import homePageTitleImg from "../../assets/images/homepage-title-img.png";

const HomePage = () => {
  return (
    <div className="HomePage__Container">
      <div className="HomePage__TitleContainer">
        <div className="HomePage__TitleContent">
          <AnimatedText />
          <div className="HomePage__TitleContent--description">
            Elevate patient care with WellVoice, transforming patient insights
            into actionable data, enhancing satisfaction and improving overall
            healthcare experiences.
          </div>
          <div className="HomePage__TitleButton--container">
            <button className="HomePage__TitleButton--button">
              Start for Free
            </button>
            <button className="HomePage__TitleButton--button">
              Book a Demo
            </button>
          </div>
        </div>
        <img
          className="HomePage__TitleImg"
          src={homePageTitleImg}
          alt="HomePage Title"
        />
      </div>

      <div className="HomePage__AdContainer">
        <div className="HomePage__AdTitle">Why WellVoice ?</div>
        <div className="HomePage__AdList">
          <div className="HomePage__AdItem">
            <div className="HomePage__AdItem--title">
              So much more than admin
            </div>
            <div className="HomePage__AdItem--description"></div>
          </div>
          <div className="HomePage__AdItem">
            <div className="HomePage__AdItem--title">Grow beyond 1:1</div>
            <div className="HomePage__AdItem--description"></div>
          </div>
          <div className="HomePage__AdItem">
            <div className="HomePage__AdItem--title">
              Elevate your client experience
            </div>
            <div className="HomePage__AdItem--description"></div>
          </div>
          <div className="HomePage__AdItem">
            <div className="HomePage__AdItem--title">Be part of a movement</div>
            <div className="HomePage__AdItem--description"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
