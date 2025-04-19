import '../css/nav.css'

function NavBar({ onNavClick }) {
    return (
      <nav>
        <button onClick={() => onNavClick('home')}>Home</button>
        <button onClick={() => onNavClick('about')}>About</button>
        <button onClick={() => onNavClick('background')}>Background</button>
        <button onClick={() => onNavClick('projects')}>Projects</button>
        <button onClick={() => onNavClick('contact')}>Contact</button>
      </nav>
    );
  }
  
  export default NavBar;