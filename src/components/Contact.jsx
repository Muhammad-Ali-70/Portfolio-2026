import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Check if any field is empty
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    formData.append("access_key", "97160e76-1107-40b6-867b-7b4b003dfd09");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fa-solid fa-paper-plane"></i> alihere786@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> +923345103146
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/usama-mansoor-22ba92220" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/UsamaMansoor026" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.facebook.com/usama.mansoor.5851?mibextid=ZbWKwL" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <button className="btn-cv">
              <a href="https://drive.google.com/file/d/1krokDXV1_a5BuLODQM0RuNTtzdb6eSPx/view?usp=drive_link" target="_blank">
                Download CV
              </a>
            </button>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} placeholder="Your Name..." />
              <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} placeholder="Your Email..." />
              <textarea name="message" id="message" rows="4" onChange={handleChange} value={formData.message} placeholder="Your Message..."></textarea>
              <button className="button" type="submit">
                <p>Submit</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
