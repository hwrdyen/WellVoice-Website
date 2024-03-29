import "./AnimatedText.scss";
import { useEffect, useState } from "react";

const FADE_INTERVAL_MS = 1750;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const WORDS_TO_ANIMATE = ["Reliability", "Outcomes", "Workflow"];

type FadeProp = { fade: "fade-in" | "fade-out" };

const AnimatedText = () => {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: "fade-in" });
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === "fade-in"
        ? setFadeProp({ fade: "fade-out" })
        : setFadeProp({ fade: "fade-in" });
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        (prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
      );
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <div className="AnimatedText__Container">
      <span className="AnimatedText__Title">Better</span>
      <span className={`${fadeProp.fade} AnimatedText__Title`}>
        {WORDS_TO_ANIMATE[wordOrder]}
      </span>
    </div>
  );
};

export default AnimatedText;
