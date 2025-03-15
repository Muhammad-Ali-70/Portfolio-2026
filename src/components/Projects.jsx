import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".scrollingImage");

    images.forEach((image) => {
      image.onload = () => {
        const wrapper = image.parentElement;

        image.addEventListener("mouseenter", () => {
          image.style.transform = `translateY(-${
            image.scrollHeight - wrapper.clientHeight
          }px)`;
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
    <section className="projects" id="projects">
      <h2 className="heading">Latest Projects</h2>
      {/* <ProjectSwiper /> */}
      <div className="image-container">
        <div className="outer-wrapper">
          <div className="code_btn">
            <a href="https://github.com/UsamaMansoor026/" target="_blank">
              <FaCode />
            </a>
          </div>
          <div className="image-wrapper">
            <img
              className="scrollingImage"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ae202.appspot.com/o/projectImages%2Fnexusconsulting.png?alt=media&token=2d54512b-45e7-49e5-87d6-09a0631a2d7e"
              alt=""
            />
          </div>

          <a href="https://nexus-consulting.vercel.app/" target="_blank">
            Nexus Consulting
          </a>
        </div>

        <div className="outer-wrapper">
          <div className="code_btn">
            <a href="https://github.com/UsamaMansoor026/" target="_blank">
              <FaCode />
            </a>
          </div>
          <div className="image-wrapper">
            <img
              className="scrollingImage"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ae202.appspot.com/o/projectImages%2Fvegefoods.png?alt=media&token=b4a1a6a2-d967-49ea-a153-c94ba09e7b93"
              alt=""
            />
          </div>

          <a href="https://nexus-consulting.vercel.app/" target="_blank">
            Vege-Foods
          </a>
        </div>

        <div className="outer-wrapper">
          <div className="code_btn">
            <a
              href="https://github.com/UsamaMansoor026/Interneepk_Tasks/tree/main/TSK_000_44"
              target="_blank"
            >
              <FaCode />
            </a>
          </div>
          <div className="image-wrapper">
            <img
              className="scrollingImage"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ae202.appspot.com/o/projectImages%2FrestAPI.png?alt=media&token=b0a67d12-6596-449e-813d-95114e06f146"
              alt=""
            />
          </div>

          <a href="https://restapiexammple026.netlify.app/" target="_blank">
            RestAPI Integration
          </a>
        </div>

        <div className="outer-wrapper">
          <div className="code_btn">
            <a
              href="https://github.com/UsamaMansoor026/OnlineGamingPortal-MAAN"
              target="_blank"
            >
              <FaCode />
            </a>
          </div>
          <div className="image-wrapper">
            <img
              className="scrollingImage"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ae202.appspot.com/o/projectImages%2FonlineGamingPortal.png?alt=media&token=08471d30-8cd7-4b2f-a706-3feafe0de951"
              alt=""
            />
          </div>

          <a
            href="https://usamamansoor026.github.io/OnlineGamingPortal-MAAN/"
            target="_blank"
          >
            Online Gaming Portal
          </a>
        </div>

        <div className="outer-wrapper">
          <div className="code_btn">
            <a
              href="https://github.com/UsamaMansoor026/Cake_Shop"
              target="_blank"
            >
              <FaCode />
            </a>
          </div>
          <div className="image-wrapper">
            <img
              className="scrollingImage"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ae202.appspot.com/o/projectImages%2Fcakeshop.png?alt=media&token=08e50c1a-1233-4ede-b35c-4b79f82a17f8"
              alt=""
            />
          </div>

          <a href="https://cakealchemist.netlify.app/" target="_blank">
            Cake Alchemist
          </a>
        </div>

        <div className="outer-wrapper">
          <div className="code_btn">
            <a
              href="https://github.com/UsamaMansoor026/notesApp"
              target="_blank"
            >
              <FaCode />
            </a>
          </div>
          <div className="image-wrapper">
            <img
              className="scrollingImage"
              style={{ objectFit: "cover", height: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ae202.appspot.com/o/projectImages%2FnotesApp.png?alt=media&token=8d3d2900-0d54-4b55-a0e0-2745baf92614"
              alt=""
            />
          </div>

          <a href="https://maan-notes.netlify.app/" target="_blank">
            Notes App
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBlock: "19px",
        }}
      >
        <button id="navigateButton" className="button">
          <a href="https://github.com/UsamaMansoor026" target="_blank">
            See More
          </a>
        </button>
      </div>
    </section>
  );
};

export default Projects;
