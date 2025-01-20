import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="navbar-container">
        <div className="logo">Eventura</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <nav className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/create-event" onClick={() => setMenuOpen(false)}>Create Event</Link>
            </li>
            <li>
              <Link to="/signup" className="btn signup-btn" onClick={() => setMenuOpen(false)}>Inscription</Link>
            </li>
            <li>
              <Link to="/login" className="btn login-btn" onClick={() => setMenuOpen(false)}>Connexion</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
