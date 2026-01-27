import React from "react";
import { AboutSection, Wrapper } from "./about.styles";
import {
  FaCode,
  FaMobileAlt,
  FaBolt,
  FaPuzzlePiece,
  FaBookOpen,
  FaUsers
} from "react-icons/fa";

const About = () => {
  return (
    <AboutSection>
      <Wrapper>
        <h2>About</h2>

        <p className="about-text">
          I am a frontend developer specializing in building modern and
          user-friendly interfaces. I create clean, fast, and responsive
          websites and enjoy building real-world applications with React.
        </p>

        <div className="part">
          {/* LEFT */}
          <div className="left">
            <h3>Personal</h3>
            <p><strong>Name:</strong> 
            <span>
            Lazizjon

            </span>
            </p>
            <p><strong>Role:</strong> 
            <span>
            Frontend Developer

            </span>
            </p>
            <p><strong>Age:</strong> 
            <span>
            1
            5

            </span>
            </p>
            <p><strong>City:</strong> 
            <span>
            Samarqand

            </span>
            </p>
            <p><strong>Freelance:
              </strong>
            <span>
             Available

            </span>
            </p>
            <p><strong>Languages:</strong> <span>
            Uzbek, English (Basic)</span></p>
          </div>

          {/* RIGHT */}
          <div className="right">
            <h3>Core Skills</h3>

            <div className="skill-card">
              <FaCode className="icon" />
              <span>Clean & Readable Code</span>
            </div>
            <div className="skill-card">
              <FaMobileAlt className="icon" />
              <span>Responsive Design</span>
            </div>
            <div className="skill-card">
              <FaBolt className="icon" />
              <span>Fast Learner</span>
            </div>
            <div className="skill-card">
              <FaPuzzlePiece className="icon" />
              <span>Problem Solving</span>
            </div>
            <div className="skill-card">
              <FaBookOpen className="icon"  />
              <span>Self-Learning</span>
            </div>
            <div className="skill-card">
              <FaUsers className="icon" />
              <span>Teamwork</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </AboutSection>
  );
};

export default About;
