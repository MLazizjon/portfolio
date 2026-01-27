import React, { useState } from "react";
import { SkillSection, Wrapper } from "./skill.styles";

const Skill = () => {
  const [openAccordion, setOpenAccordion] = useState("hard");

  const toggleAccordion = (name) => {
    setOpenAccordion((prev) => (prev === name ? "" : name));
  };

  const softSkills = [
    { name: "Clean & Readable Code", percent: 85 },
    { name: "Problem Solving", percent: 80 },
    { name: "Fast Learner", percent: 90 },
    { name: "Self-Learning", percent: 88 },
    { name: "Teamwork", percent: 82 },
  ];

  const designSkills = [
    { name: "Responsive Design", percent: 85 },
    { name: "UI / UX Basics", percent: 70 },
    { name: "Figma (Basic)", percent: 65 },
    { name: "Modern Layouts", percent: 75 },
  ];

  const hardSkills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 85 },
    { name: "Bootstrap", percent: 80 },
    { name: "JavaScript", percent: 75 },
    { name: "React", percent: 70 },
    { name: "Git & GitHub", percent: 65 },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <li key={index}>
        <div className="skill-top">
          <span>{skill.name}</span>
          <span className="percent">{skill.percent}%</span>
        </div>

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: `${skill.percent}%` }}
          />
        </div>
      </li>
    ));

  return (
    <SkillSection>
      <Wrapper>
        <h2>Skills</h2>

        <div className="skills-layout">
          {/* LEFT */}
          <div className="left">
            <div className="accordion">
              <button onClick={() => toggleAccordion("soft")}>
                Soft Skills
              </button>
              {openAccordion === "soft" && (
                <ul>{renderSkills(softSkills)}</ul>
              )}
            </div>

            <div className="accordion">
              <button onClick={() => toggleAccordion("design")}>
                Design
              </button>
              {openAccordion === "design" && (
                <ul>{renderSkills(designSkills)}</ul>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            <div className="accordion">
              <button onClick={() => toggleAccordion("hard")}>
                Hard Skills
              </button>
              {openAccordion === "hard" && (
                <ul>{renderSkills(hardSkills)}</ul>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </SkillSection>
  );
};

export default Skill;
