import React from "react";
import profilePic from "../assets/usama.jpeg";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="home-content fadeeout">
        <h1>
          Hy I am <span>Usama Mansoor</span>
        </h1>
        <h3 className="typing-text">
          And I'm a <span>Web Developer</span>
        </h3>
        <p style={{ textAlign: "justify" }}>
          I'm a Passionate <b>Frontend Web Developer</b> with a strong interest
          in programming and solving real-world challenges through technology.
          My journey began with mastering <b>modern frontend technologies</b> to
          create user-friendly and impactful web experiences.
          <br />
          <br />
          With hands-on experience in <b>Frontend Technologies</b>, I
          continuously explore new tools and frameworks to refine my skills. I’m
          dedicated to crafting intuitive and visually appealing user interfaces
          that enhance the web experience.
        </p>

        <div className="wrapper_icons_buttns">
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/usama-mansoor-22ba92220"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/UsamaMansoor026" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/usama.mansoor.5851?mibextid=ZbWKwL"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>

          <div className="home-buttons">
            <button className="btn-cv">
              <a
                href="https://drive.google.com/file/d/1krokDXV1_a5BuLODQM0RuNTtzdb6eSPx/view?usp=drive_link"
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="home-img rightToLeft">
        <img src={profilePic} alt="" />
      </div> */}
    </section>
  );
};

export default Hero;
