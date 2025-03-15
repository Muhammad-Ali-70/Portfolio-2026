import React from "react";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">Eduation</h2>
      <div className="timeline">
        <div className="container right">
          <div className="content appear_rightToLeft">
            <div className="tag">
              <h2>University</h2>
            </div>
            <div className="desc">
              <p>COMSATS University Islamabad with 3.46 CGPA</p>
            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content appear_leftToRight">
            <div className="tag">
              <h2>FSC</h2>
            </div>
            <div className="desc">
              <p>Fazaia Degree College MRF, PAC Kamra</p>
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content appear_rightToLeft">
            <div className="tag">
              <h2>Matric</h2>
            </div>
            <div className="desc">
              <p>Minhaj Post Graduate College Kamra Cantt</p>
            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content appear_leftToRight">
            <div className="tag">
              <h2>Internship</h2>
            </div>
            <div className="desc">
              <p>
                1 Month remote internship at BehinDev and 1 Month remote
                inetrnship at TechAlpha, 2 Month remote Internship at
                Internee.Pk and 6 Months On-Site internship at SkyLarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
