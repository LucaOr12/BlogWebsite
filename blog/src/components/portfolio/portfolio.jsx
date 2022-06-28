import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import {
  WorksPortfolio,
  P_ProjectPortfolio,
  OngoingDegreePortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("Works");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "Works",
      title: "Works",
    },
    {
      id: "P_Projects",
      title: "Personal Projects",
    },
    {
      id: "OngoingDegree",
      title: "Ongoing Degree",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "Works":
        setData(WorksPortfolio);
        break;
      case "P_Project":
        setData(P_ProjectPortfolio);
        break;
      case "OngoingDegree":
        setData(OngoingDegreePortfolio);
        break;
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>PORTFOLIO</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
