import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">Services</h2>

      <div className="service-container">
        <div className="single-service littleToBig">
          <div className="content">
            <span className="icon">
              <i className="fas fa-mobile-screen-button"></i>
            </span>
            <h3 className="title">Cross-Platform Apps</h3>
            <p className="description">Developing mobile applications that run smoothly on both Android and iOS platforms with responsive and consistent user experiences.</p>
          </div>
          <span className="circle-before"></span>
        </div>

        <div className="single-service littleToBig">
          <div className="content">
            <span className="icon">
              <i className="fab fa-react"></i>
            </span>
            <h3 className="title">Figma to React Native</h3>
            <p className="description">Crafting scalable and maintainable mobile applications using React Native, with responsive and pixel-perfect UI implementation directly from Figma designs.</p>
          </div>
          <span className="circle-before"></span>
        </div>

        <div className="single-service littleToBig">
          <div className="content">
            <span className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <h3 className="title">Live Tracking & Maps</h3>
            <p className="description">Implementing real-time location tracking, route mapping, and navigation features for mobile applications.</p>
          </div>
          <span className="circle-before"></span>
        </div>

        <div className="single-service littleToBig">
          <div className="content">
            <span className="icon">
              <i className="fas fa-file-invoice-dollar"></i>
            </span>
            <h3 className="title">Payment Integration</h3>
            <p className="description">Integrating secure payment gateways like Stripe Connect for smooth in-app transactions and wallet management.</p>
          </div>
          <span className="circle-before"></span>
        </div>

        <div className="single-service littleToBig">
          <div className="content">
            <span className="icon">
              <i className="fas fa-images"></i>
            </span>
            <h3 className="title">Media Handling</h3>
            <p className="description">Implementing image and video upload, processing, and cloud storage integration for dynamic mobile content.</p>
          </div>
          <span className="circle-before"></span>
        </div>
      </div>
    </section>
  );
};

export default Services;
