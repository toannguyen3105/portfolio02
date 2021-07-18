import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./portfolio.scss";
import { crawlPortfolio, mmoToolsPortfolio, webPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("website");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "website",
      title: "Website App",
    },
    {
      id: "crawlData",
      title: "Crawl Data",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "website":
        setData(webPortfolio);
        break;
      case "crawlData":
        setData(crawlPortfolio);
        break;
      case "mmoTools":
        setData(mmoToolsPortfolio);
        break;
      default:
        setData(webPortfolio);
        break;
    }
  }, [selected]);

  console.log(data);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((l) => (
          <PortfolioList
            id={l.id}
            title={l.title}
            active={selected === l.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="Production" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
