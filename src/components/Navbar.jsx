import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmGeXHe1w5Lg3_EQqloqd7qHK_CujI_iR6V8wBZYZX8z7jTJczG2eBFzzzpHg3GK0MjpZwz_70MSwrbh4DlzHuEfTdimxJjqLIqd47E_H_IhnGjpuVlD7_J5KTLg-czor6nA_a5mxqk0QX3YGnincSq5JCDq4GgNHwdH0AgFNJ1mjzg9TognjsyjoPb04/w945-h600-p-k-no-nu/df.png" alt="Food Wonder Logo" />
        </Link>
      </div>
      <div className="navbar-hamburger" onClick={handleMenuToggle}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="7" width="32" height="4" rx="2" fill="#fff" />
          <rect y="14" width="32" height="4" rx="2" fill="#fff" />
          <rect y="21" width="32" height="4" rx="2" fill="#fff" />
        </svg>
      </div>
      <ul className={menuOpen ? "navbar-menu open" : "navbar-menu"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
        <li><Link to="/customize-order" onClick={() => setMenuOpen(false)}>Customize Order</Link></li>
        <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/sign-up-login" onClick={() => setMenuOpen(false)}>Sign Up / Login</Link></li>
        <li><Link to="/feedback" onClick={() => setMenuOpen(false)}>Feedback</Link></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
