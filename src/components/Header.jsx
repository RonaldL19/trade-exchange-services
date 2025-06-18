import { useState } from 'react';
import images from '../assets/images/logo-trade.png';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='header-father'>
      <Link to="/" className="header-logo">
        <img className="header-image" src={images} alt="Logo" />
      </Link>

      <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`header-options ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className="header-logo">
          <button>Inicio</button>
        </Link>
        <Link to="/quienes-somos">
          <button className="btn-nosotros">Nosotros</button>
        </Link>
        <nav className="menu-services">
          <div
            className="dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="dropdown-button">
              Servicios <span>▼</span>
            </button>

            {isOpen && (
              <div className="dropdown-content">
                <ul>
                  <Link to="/Servicios" className="header-logo">
                    <li>Servicio Marítimo</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </nav>
        {/* <button>Blog</button> */}
        <Link to="/Contacto">
          <button>Contacto</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
