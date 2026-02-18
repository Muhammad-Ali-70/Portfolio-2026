import React from "react";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">Education & Experience</h2>

      <div className="timeline">
        {/* Zysoftec */}
        <div className="container right">
          <div className="content appear_rightToLeft">
            <div className="tag">
              <h2>React Native Developer</h2>
            </div>
            <div className="desc">
              <p>
                Zysoftec (Mar 2025 – Mar 2026) <br />
                Worked on 13+ cross-platform mobile applications for mobile, TV, and tablet using React Native. Built scalable features, integrated APIs, and contributed to full app development
                lifecycle.
              </p>
            </div>
          </div>
        </div>

        {/* Skylarks */}
        <div className="container left">
          <div className="content appear_leftToRight">
            <div className="tag">
              <h2>Jr. React Native Developer</h2>
            </div>
            <div className="desc">
              <p>
                Skylarks IT Solutions (May 2024 – Jan 2025) <br />
                Developed and maintained 7+ mobile applications using React Native, integrated REST APIs, and improved UI performance and responsiveness.
              </p>
            </div>
          </div>
        </div>

        {/* Prodigy */}
        <div className="container right">
          <div className="content appear_rightToLeft">
            <div className="tag">
              <h2>React Native Intern</h2>
            </div>
            <div className="desc">
              <p>
                Prodigy InfoTech (Jan 2024 – Mar 2024) <br />
                Built responsive mobile interfaces, integrated APIs, and optimized components for performance and scalability.
              </p>
            </div>
          </div>
        </div>

        {/* University */}
        <div className="container left">
          <div className="content appear_leftToRight">
            <div className="tag">
              <h2>Bachelor of Science in Computer Science</h2>
            </div>
            <div className="desc">
              <p>
                COMSATS University Islamabad, Attock Campus <br />
                Sept 2020 – Aug 2024 <br />
              </p>
            </div>
          </div>
        </div>

        {/* FSC */}
        <div className="container right">
          <div className="content appear_rightToLeft">
            <div className="tag">
              <h2>Intermediate (FSC)</h2>
            </div>
            <div className="desc">
              <p>
                Army Public School & College, Attock Cantt <br />
                2016 – 2020 <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
