import "./HomePage.scss";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import homePageTitleImg from "../../assets/images/homepage-title-img.png";

import { featureDetail } from "../../config/homePage-config";
import FeatureCard from "../../components/FeatureCard/FeatureCard";

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
          {featureDetail.map((feature) => (
            <FeatureCard
              featureTitle={`${feature?.title}`}
              featureDescription={`${feature?.description}`}
            />
          ))}
          {/* <div className="HomePage__AdItem">
            <div className="HomePage__AdItem--title">
              So much more than admin
            </div>
            <div className="HomePage__AdItem--description">
              Automate admin tasks while delivering an experience that clients
              will love.
            </div>
          </div>
          <div className="HomePage__AdItem">
            <div className="HomePage__AdItem--title">Grow beyond 1:1</div>
            <div className="HomePage__AdItem--description">
              Automate admin tasks while delivering an experience that clients
              will love.
            </div>
          </div>
          <div className="HomePage__AdItem">
            <div className="HomePage__AdItem--title">
              Elevate your client experience
            </div>
            <div className="HomePage__AdItem--description">
              Unique tools offer the unrivaled ability to support client success
              and accountability.
            </div>
          </div>
          <div className="HomePage__AdItem">
            <div className="HomePage__AdItem--title">Be part of a movement</div>
            <div className="HomePage__AdItem--description">
              Join a group of professionals who share your passion for driving
              better health outcomes.
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
