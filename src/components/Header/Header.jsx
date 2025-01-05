import React, { useState } from 'react';
import logo from '../images/logo.svg';
import './Header.css';

const Header = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const handleLinkClick = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <div className='header'>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className={`links ${menu ? 'open' : ''}`}>
          <a href="#home" onClick={() => handleLinkClick('home')}>Home</a>
          <a href="#courses" onClick={() => handleLinkClick('courses')}>Courses</a>
          <a href="#blog" onClick={() => handleLinkClick('blog')}>Blog</a>
          <a href="#contact" onClick={() => handleLinkClick('footer')}>Contact</a>
        </div>
        <div className="try">
          <i className="fa-solid fa-magnifying-glass"></i>
          <button>Try for free <i className="fa-solid fa-arrow-right"></i></button>
          <div className="menu" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      {/* <div className={`links ${menu ? 'open' : ''}`}>
        <a href="#home" onClick={() => handleLinkClick('home')}>Home</a>
        <a href="#courses" onClick={() => handleLinkClick('courses')}>Courses</a>
        <a href="#blog" onClick={() => handleLinkClick('blog')}>Blog</a>
        <a href="#contact" onClick={() => handleLinkClick('footer')}>Contact</a>
      </div> */}
    </div>
  );
};

export default Header;
