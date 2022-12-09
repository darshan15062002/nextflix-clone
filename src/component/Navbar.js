// import React, { useEffect, useState } from "react";
import React from "react";
import "./Navbar.css";

function Navbar() {
  // const [show, handleShow] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else {
  //       handleShow(false);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    // <div className={`navbar ${show && "navbar__dark"}`}>
    <div className="navbar">
      <img
        src="Netflix-logo-red-black-png.png"
        alt="Netflix-logo"
        className="nav__logo"
      />
      <img
        src="Netflix-avatar.png"
        alt="Netflix-logo"
        className="nav__avatar"
      />
    </div>
  );
}

export default Navbar;
