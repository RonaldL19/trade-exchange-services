import React from 'react';
import '../styles/MaritimeService.css';

const MaritimeService = () => {
  return (
    <section className="maritime-section">
      <div className="section-header">
        <h2 className="maritime-title">Mudanzas Internacionales</h2>
        <p className="maritime-subtitle">
          Información esencial para el envío de tus pertenencias con <strong>Trade Exchange Services LLC.</strong>
        </p>
      </div>

      <div className="containers-grid">
        <div className="container-card">
          <img src="https://americanlogisticcargo.com/wp-content/uploads/2023/05/20-pies.jpg" alt="Contenedor 20 pies" />
          <div className="card-MaritimContent">
            <h3>Contenedor 20"</h3>
            <p>Medidas: 2.44m x 2.59m x 6.06m</p>
            <p>Capacidad: hasta 32 M³ / 1.100 pies³</p>
          </div>
        </div>

        <div className="container-card">
          <img src="https://americanlogisticcargo.com/wp-content/uploads/2023/05/40-pies-1.jpg" alt="Contenedor 40 pies" />
          <div className="card-MaritimContent">
            <h3>Contenedor 40"</h3>
            <p>Medidas: 2.44m x 2.59m x 12.2m</p>
            <p>Capacidad: hasta 64 M³ / 2.300 pies³</p>
          </div>
        </div>
      </div>

      <div className="info-sections">
        <div className="info-card">
          <h4>Tiempo de tránsito</h4>
          <p>En promedio: 30 días hábiles.</p>
          <p className="note">Puede variar por condiciones marítimas, puertos, aduanas o carreteras.</p>
        </div>

        <div className="info-card">
          <h4>¿Cómo se calcula el volumen?</h4>
          <p>
            Largo × Alto × Ancho = Pulgadas³<br />
            Pulgadas³ ÷ 1728 = Pies³<br />
            Pies³ × 0.0283 = Metros³
          </p>
        </div>

        <div className="info-card">
          <h4>¿Necesitas asesoría?</h4>
          <p>Estamos listos para ayudarte paso a paso con tu mudanza internacional.</p>
        </div>
      </div>

      <div className="call-action">
        <a href="https://wa.me/17863977418" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">¡Solicita tu cotización gratuita!</button>
        </a>
      </div>
    </section>
  );
};

export default MaritimeService;
