import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);

  function onScroll() {
    if (window.scrollY > 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  }
  window.addEventListener("scroll", onScroll);
  return (
    <nav className={colorChange ? "black" : ""}>
      <img
        className="netflix-logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png"
        alt="netflix"
      />

      <img
        className="profile-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </nav>
  );
}
