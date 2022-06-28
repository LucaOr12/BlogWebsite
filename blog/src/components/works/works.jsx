import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "HERE WeGo",
      desc: "Geolocalization App",
      img: "https://www.here.com/sites/g/files/odxslz256/files/styles/vision_secondary_hero_medium/public/2022-05/workspace_hero-16x9-3840x2160-v2.jpg?h=8f74817f&itok=zp74HiZu://www.here.com/sites/g/files/odxslz256/files/styles/vision_primary_hero_full_screen_xl/public/2022-06/here_about_us_still-hero-16x9-3840x2160.jpg?h=8f74817f&itok=lWl6ImLi",
      prj: "https://www.here.com/",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Tetris Website",
      desc: "A simple Tetris website using Javascript, CSS, Html",
      img: "https://img.freepik.com/free-vector/retro-gaming-poster-template_52683-50969.jpg?t=st=1656407320~exp=1656407920~hmac=5005221e05192a5b344da6e8c66679529665c053a19b75dc64a584d40d878fff&w=740",
      prj: "",
    },
    {
      id: "3",
      icon: "",
      title: "Title",
      desc: "description",
      img: "",
      prj: "",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
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
                    <img src={d.icon}></img>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.prj} target="_blank">
                    Link
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt=""></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      ></img>
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      ></img>
    </div>
  );
}
