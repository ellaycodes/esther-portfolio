// src/components/NavBar.jsx
import '../css/nav.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function NavBar({ onNavClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  // If we arrive at “/” with a `section` in state, scroll there.
  useEffect(() => {
    if (location.pathname === '/' && location.state?.section) {
      onNavClick(location.state.section);
      // Optionally clear the state so it doesn’t fire again:
      // navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, onNavClick]);

  const handleNav = (section) => {
    if (location.pathname === '/') {
      // Already on the home page: just scroll
      onNavClick(section);
    } else {
      // Go back to “/” and stash which section we want
      navigate('/', { state: { section } });
    }
  };

  return (
    <nav>
      <button onClick={() => handleNav('home')}>Home</button>
      <button onClick={() => handleNav('about')}>About</button>
      <button onClick={() => handleNav('background')}>Background</button>
      <button onClick={() => handleNav('projects')}>Projects</button>
      <button onClick={() => handleNav('contact')}>Contact</button>
    </nav>
  );
}

export default NavBar;
