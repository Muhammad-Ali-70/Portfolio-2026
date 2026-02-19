import React from "react";
import profilePic from "../assets/AliImage.jpeg";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="home-content fadeeout">
        <h1>
          Hi! I am <span>Muhammad Ali</span>
        </h1>
        <h3 className="typing-text">
          And I'm a <span>React Native Developer</span>
        </h3>
        <p style={{ textAlign: "justify" }}>
          I'm a passionate <b>React Native Mobile Developer</b> with a strong interest in building scalable and high-performance mobile applications. My journey began with mastering{" "}
          <b>React Native fundamentals, mobile UI design, and cross-platform development</b> to create seamless experiences for both Android and iOS users.
          <br />
          <br />
          With hands-on experience in <b>React Native CLI and Expo workflows</b>, I continuously explore new libraries and best practices to refine my skills. I’m dedicated to crafting intuitive,
          responsive, and user-focused mobile applications that deliver real value.
        </p>

        <div className="wrapper_icons_buttns">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/m-ali-khattak/" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Muhammad-Ali-70" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <div className="home-buttons">
            <button className="btn-cv">
              <a href="https://drive.google.com/file/d/1pxBKLI-LM9rEHBlOeB3fA6mkTSyLNXBS/view?usp=sharing" target="_blank">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="home-img rightToLeft">
        <img src={profilePic} alt="" />
      </div>
    </section>
  );
};

export default Hero;
