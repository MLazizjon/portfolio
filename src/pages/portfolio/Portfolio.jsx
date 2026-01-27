import React from "react";
import { PortfolioSection, Wrapper } from "./portfolio.styles";

import It_Saf from "./assets/It Saf.png";
import Biology from "./assets/Biology.png";
import Modern_web from "./assets/Modern Web.png";
import Platia from "./assets/Platia.png";

const projects = [
  {
    name: "It Saf",
    image: It_Saf,
    description: "Website about the training center",
    link: "https://platform-ashy-three.vercel.app/",
  },
  {
    name: "Modern Web",
    image: Modern_web,
    description: "Web programming skills",
    link: "https://web-sayt-five.vercel.app/",
  },
  {
    name: "Platia",
    image: Platia,
    description: "Italian food website",
    link: "https://platia-alpha.vercel.app/",
  },
  {
    name: "Biology",
    image: Biology,
    description: "Teaching biology",
    link: "https://biologiya-topaz.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <PortfolioSection>
      <Wrapper>
        <h2>My Projects</h2>

        <div className="boxs">
          {projects.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.image} alt={item.name} />

              <div className="info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer">
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </PortfolioSection>
  );
};

export default Portfolio;
