import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">Services</h2>

      <div className="service-container">
        <div className="single-service littleToBig">
          <div className="content">
            <span className="icon">
              <i className="fab fa-laptop-code"></i>
            </span>
            <h3 className="title">Responsive Website</h3>
            <p className="description">
              Crafting digital experiences that seamlessly adapt to every screen
              size and device, my service specializes in creating responsive
              websites.
            </p>
          </div>
          <span className="circle-before"></span>
        </div>

        <div className="single-service littleToBig">
          <div className="content">
            <span className="icon">
              <i className="fab fa-battle-net"></i>
            </span>
            <h3 className="title">Pixel Perfect Website</h3>
            <p className="description">
              Attention to detail is my motto. With my Pixel Perfect Website
              service, I meticulously develop websites to achieve flawless
              precision.
            </p>
          </div>
          <span className="circle-before"></span>
        </div>

        <div className="single-service littleToBig">
          <div className="content">
            <span className="icon">
              <i className="fab fa-battle-net"></i>
            </span>
            <h3 className="title">Figma to Code</h3>
            <p className="description">
              Transforming Figma designs into functional code is my specialty.
              With my Figma to Code service, I translate your vision into
              pixel-perfect websites.
            </p>
          </div>
          <span className="circle-before"></span>
        </div>

        <div className="single-service littleToBig">
          <div className="content">
            <span className="icon">
              <i className="fab fa-battle-net"></i>
            </span>
            <h3 className="title">PSD to Code</h3>
            <p className="description">
              I meticulously transform your Photoshop creations into functional,
              responsive code. Seamlessly bridging design and development.
            </p>
          </div>
          <span className="circle-before"></span>
        </div>

        <div className="single-service littleToBig">
          <div className="content">
            <span className="icon">
              <i className="fab fa-battle-net"></i>
            </span>
            <h3 className="title">Smooth Animations</h3>
            <p className="description">
              From subtle transitions to captivating effects, I specialize in
              crafting fluid and visually stunning animations for your website
              or application.
            </p>
          </div>
          <span className="circle-before"></span>
        </div>
      </div>
    </section>
  );
};

export default Services;
