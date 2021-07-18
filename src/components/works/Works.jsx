import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "assets/globe.png",
      title: "Web design",
      desc: "lorem10",
      img: "https://i.pinimg.com/originals/30/a2/58/30a25805b7e2ac9e7c2547b54833705f.jpg",
    },
    {
      id: 2,
      icon: "assets/mobile.png",
      title: "Web design2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sapiente.",
      img: "https://i.pinimg.com/originals/30/a2/58/30a25805b7e2ac9e7c2547b54833705f.jpg",
    },
    {
      id: 3,
      icon: "assets/mobile.png",
      title: "Web design3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sapiente.",
      img: "https://i.pinimg.com/originals/30/a2/58/30a25805b7e2ac9e7c2547b54833705f.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="Mobile" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://i.pinimg.com/originals/30/a2/58/30a25805b7e2ac9e7c2547b54833705f.jpg"
                  alt="Demo"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt="Arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt="Arrow"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
