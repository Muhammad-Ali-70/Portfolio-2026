import React, { useEffect } from "react";

const Navbar = () => {
  const hideNav = () => {
    document.querySelector("#menu-icon").classList.remove("fa-x");
    document.querySelector(".nav").classList.remove("active");
  };

  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
          });
        }
      });
    };
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo" id="logo">
        &lt; Muhammad Ali /&gt;
      </a>

      <i
        className="fa-solid fa-bars"
        id="menu-icon"
        onClick={() => {
          document.querySelector("#menu-icon").classList.toggle("fa-x");
          document.querySelector(".nav").classList.toggle("active");
        }}
      ></i>

      <nav className="navbar nav">
        <a href="#home" className="active" onClick={hideNav}>
          Home
        </a>
        <a href="#services" onClick={hideNav}>
          Services
        </a>
        <a href="#skills" onClick={hideNav}>
          Skills
        </a>
        {/* <a href="#projects" onClick={hideNav}>
          Projects
        </a> */}
        {/* <a href="#certificates" onClick={hideNav}>
          Certificates
        </a> */}
        <a href="#education" onClick={hideNav}>
          Education
        </a>
        <a href="#contact" onClick={hideNav}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
