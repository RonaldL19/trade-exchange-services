import React from 'react';
import '../styles/AgencyBacked.css';

const AgencyBacked = () => {
    return (
        <section className="container-Agency">
            <div className="back">
                <p className="back-text">Agencia respaldada por:</p>
                <a href="https://americanlogisticcargo.com/" className="header-logo" target="_blank" rel="noopener noreferrer">
                    <img className="img-back" src="https://americanlogisticcargo.com/wp-content/uploads/2023/04/logo-american-1.png" alt="Logo respaldo" />
                </a>
            </div>
        </section>
    );
};

export default AgencyBacked;
