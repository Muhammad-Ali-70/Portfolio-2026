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
              <img src={skillIcons.react} alt="React Native" />
              <span>React Native CLI</span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <img src={skillIcons.expo} alt="Expo" />
              <span>Expo</span>
            </div>
          </div>

          {/* Core JavaScript & TypeScript */}
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

          {/* React Native & Expo */}

          {/* State Management */}
          <div className="bar">
            <div className="info">
              <img src={skillIcons.redux} alt="Redux" />
              <span>Redux</span>
            </div>
          </div>

          {/* Backend & Firebase */}
          <div className="bar">
            <div className="info">
              <img src={skillIcons.firebase} alt="Firebase" />
              <span>Firebase</span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <img src={skillIcons.supabase} alt="Supabase" />
              <span>Supabase</span>
            </div>
          </div>

          {/* Payments & Auth */}
          <div className="bar">
            <div className="info">
              <img src={skillIcons.stripe} alt="Stripe" />
              <span>Stripe</span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <img src={skillIcons.paypal} alt="PayPal" />
              <span>PayPal</span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <img src={skillIcons.google} alt="Google Auth" />
              <span>Google Libraries</span>
            </div>
          </div>

          {/* Maps & Geolocation */}
          <div className="bar">
            <div className="info">
              <img src={skillIcons.maps} alt="Maps / Geolocation" />
              <span>Maps / Geolocation</span>
            </div>
          </div>

          {/* Version Control */}
          <div className="bar">
            <div className="info">
              <img src={skillIcons.git} alt="Git" />
              <span>Git/Github</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
