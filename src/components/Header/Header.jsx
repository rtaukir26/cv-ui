import React, { useState } from "react";
import { THEME_MODE } from "../../constant/localStorage";

const Header = () => {
  const [theme, setTheme] = useState(
    sessionStorage.getItem(THEME_MODE) === "light-mode" ||
      sessionStorage.getItem(THEME_MODE) === null
      ? true
      : false
  );
  const handleToggle = () => {
    setTheme(!theme);

    if (theme) {
      sessionStorage.setItem(THEME_MODE, "dark-mode");
      document.getElementById("root")?.classList.add("dark-mode");
      document.getElementById("root")?.classList.remove("light-mode");
      //   toast.success("Light mode")
    } else {
      sessionStorage.setItem(THEME_MODE, "light-mode");
      document.getElementById("root")?.classList.add("light-mode");
      document.getElementById("root")?.classList.remove("dark-mode");
    }
  };
  return (
    <div className="header-container">
      <div className="header-body">
        <div className="brand-con">
          <span>PC</span>
        </div>
        <div className="toggle-container" onClick={handleToggle}>
          <span className={theme ? "light-mode" : "dark-mode"}></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
