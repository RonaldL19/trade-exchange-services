import React from 'react'
import { useState } from 'react';
import  images  from '../assets/images/logo-trade-exchange.png'
import '../styles/Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='header-father'>
      <div className='header-logo'>
        <img className='header-image' src={images} alt="" />
      </div>
      <div className='header-options'>
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
        <button className="">Blog</button>
        <button className="">Contacto</button>
      </div>
    </div>
  )
}

export default Header
