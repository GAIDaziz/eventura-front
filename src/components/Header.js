// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Eventura</h1>
        <nav className="nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">À propos de nous</a>
          <a href="/create-event" className="nav-link">Créer un événement</a>
        </nav>
        <div className="auth-buttons">
        <button className="btn register-btn" onClick={() => window.location.href='/signup'}>Inscription</button>

          <button className="btn login-btn">Connexion</button>
        </div>
      </div>  
    </header>
  );
}

export default Header;
