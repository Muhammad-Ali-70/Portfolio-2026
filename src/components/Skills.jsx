import React from "react";
import { skillIcons } from "../constants/constant.js";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">Skills</h2>

      <div className="container">
        <div className="row" id="skillsContainer">
          <div className="bar">
            <div className="info">
              <img src={skillIcons.html} alt="HTML" />
              <span>HTML5</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src={skillIcons.css} alt="CSS" />
              <span>CSS3</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src={skillIcons.tailwind} alt="Tailwind CSS" />
              <span>Tailwind</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src={skillIcons.bootstrap} alt="Bootstrap" />
              <span>Bootstrap</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src={skillIcons.javascript} alt="JavaScript" />
              <span>JavaScript</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src={skillIcons.typescript} alt="TypeScript" />
              <span>TypeScript</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src={skillIcons.react} alt="React.js" />
              <span>React.js</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src={skillIcons.firebase} alt="Firebase" />
              <span>Firebase</span>
            </div>
          </div>
          {/* <div className="bar">
            <div className="info">
              <img src="./assets/icons/nodejs.svg" alt="Node Js" />
              <span>Node Js</span>
            </div>
          </div> */}
          {/* <div className="bar">
            <div className="info">
              <img src="./assets/icons/expressjs.svg" alt="Express Js" />
              <span>Express Js</span>
            </div>
          </div> */}

          {/* <div className="bar">
            <div className="info">
              <img src="./assets/icons/mongodb.svg" alt="Mongo Db" />
              <span>Mongo DB</span>
            </div>
          </div> */}

          <div className="bar">
            <div className="info">
              <img src={skillIcons.git} alt="Git" />
              <span>Git</span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <img src={skillIcons.github} alt="GitHub" />
              <span>GitHub</span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <img src={skillIcons.redux} alt="Redux" />
              <span>Redux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
