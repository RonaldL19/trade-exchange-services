import { useState } from 'react';
import images from '../assets/images/logo-trade.png';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='header-father'>
      <div className='header-logo'>
        <img className='header-image' src={images} alt="Logo" />
      </div>

      <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`header-options ${menuOpen ? 'show' : ''}`}>
        <button>Inicio</button>
        <button>Nosotros</button>
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
                  <li>Servicio Marítimo</li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        <button>Blog</button>
        <button>Contacto</button>
      </div>
    </header>
  );
};

export default Header;
