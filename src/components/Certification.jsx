import React, { useEffect } from "react";
// import BehinDev from "../assets/behinDev_certificate.png";
// import TechAlpha from "../assets/techAlpha_certificate.png";
// import Interneepk from "../assets/interneepk.jpeg";
// import Skylarks from "../assets/skylarks.jpg";

const Certification = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".scrollingImage");

    images.forEach((image) => {
      image.onload = () => {
        const wrapper = image.parentElement;

        image.addEventListener("mouseenter", () => {
          image.style.transform = `translateY(-${image.scrollHeight - wrapper.clientHeight}px)`;
        });

        image.addEventListener("mouseleave", () => {
          image.style.transform = "translateY(0)";
        });
      };

      if (image.complete) {
        image.onload();
      }
    });
  }, []);
  return (
    <section className="projects" id="certificates">
      <h2 className="heading">Certificates</h2>
      <div className="image-container">
        <div className="outer-wrapper fadeOut">
          <div className="image-wrapper">
            <img className="scrollingImage" src={{}} alt="" />
          </div>
          <a href="#" target="_blank">
            Skylarks IT Solutions
          </a>
        </div>

        <div className="outer-wrapper fadeOut">
          <div className="image-wrapper">
            <img className="scrollingImage" src={{}} alt="" />
          </div>
          <a href="#" target="_blank">
            Internee.Pk
          </a>
        </div>

        <div className="outer-wrapper fadeOut">
          <div className="image-wrapper">
            <img className="scrollingImage" src={{}} alt="" />
          </div>
          <a href="#" target="_blank">
            BehinDev
          </a>
        </div>

        <div className="outer-wrapper fadeOut">
          <div className="image-wrapper">
            <img className="scrollingImage" src={{}} alt="" />
          </div>
          <a href="#" target="_blank">
            Tech Alpha
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certification;
