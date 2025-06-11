import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import basket from '../assets/images/basket.svg';
import homeIcon from '../assets/images/home.svg';
import basketIcon from '../assets/images/basket.svg';
import contactsIcon from '../assets/images/contacts.svg';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="container">
            <div className="nav_box">
              <Link to="/" className="nav_logo">SHOPP</Link>

          

              <ul className={`nav_list ${menuOpen ? 'open' : ''}`}>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? 'nav_link active' : 'nav_link'
                    }
                  >
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                      isActive ? 'nav_link active' : 'nav_link'
                    }
                  >
                    <span>Contacts</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/basket"
                    className={({ isActive }) =>
                      isActive ? 'nav_link active' : 'nav_link'
                    }
                  >
                    <span>Basket</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Nav */}
      <div className="mobile_nav">
        <NavLink to="/" className="mobile-link">
          <img src={homeIcon} alt="Home" />
          <span>Asosiy</span>
        </NavLink>
        <NavLink to="/basket" className="mobile-link">
          <img src={basketIcon} alt="Корзина" />
          <span>Savat</span>
        </NavLink>
        <NavLink to="/contacts" className="mobile-link">
          <img src={contactsIcon} alt="Контакты" />
          <span>Kontaakt</span>
        </NavLink>
      </div>
    </>
  );
};

export default Nav;










