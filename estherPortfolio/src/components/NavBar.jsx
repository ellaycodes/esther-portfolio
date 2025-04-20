// src/components/NavBar.jsx
import "../css/nav.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function NavBar({ onNavClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.state?.section) {
      onNavClick(location.state.section);
    }
  }, [location, onNavClick]);

  const handleNav = (section) => {
    if (location.pathname === "/") {
      onNavClick(section);
    } else {
      navigate("/", { state: { section } });
    }
  };

  const isBlog = location.pathname.startsWith("/blog/");

  return (
    <nav className={isBlog ? "nav blog-nav" : null}>
      <button onClick={() => handleNav("home")}>Home</button>
      <button onClick={() => handleNav("about")}>About</button>
      <button onClick={() => handleNav("background")}>Background</button>
      <button onClick={() => handleNav("projects")}>Projects</button>
      <button onClick={() => handleNav("contact")}>Contact</button>
    </nav>
  );
}

export default NavBar;
