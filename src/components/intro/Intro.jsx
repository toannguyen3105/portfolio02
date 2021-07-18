import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./intro.scss";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web App", "Crawl Data"],
    });
  }, []);

  return (
    <div id="intro" className="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="Man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Tony Nguyen</h1>
          <h3>
            Freelance <span ref={textRef} />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="Down" />
        </a>
      </div>
    </div>
  );
}
