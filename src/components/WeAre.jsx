import React from 'react';
import We from '../assets/images/somos.png';
import logo from '../assets/images/logo.png';
import '../styles/WeAre.css';

const WeAre = () => {
    return (
        <section className="quienes-somos">
            <div className="container">
                <div className="front-page">
                    <img className="img-we" src={We} alt="Imagen principal" />
                    <h2 className="title-are">¿Quiénes somos?</h2>
                </div>

                <div className="feature fade-in">
                    <div className="feature-text">
                        <h3>¿Quiénes somos?</h3>
                        <p>
                            Somos una empresa con raíces latinas, creada para hacerle más fácil la vida a quienes envían cosas a Colombia. Entendemos lo que significa mandar una caja con amor, una mudanza o ayudar a la familia desde lejos.
                            <br /><br />
                            TEServices nació con el compromiso de ofrecer un servicio cercano, confiable y sin complicaciones, porque sabemos que lo que envías... tiene corazón.
                        </p>
                    </div>
                    <div className="feature-icon">
                        <img src={logo} alt="Logo empresa" />
                    </div>
                </div>

                <div className="feature reverse slide-in">
                    <div className="feature-text">
                        <h3>Compromiso con la eficiencia</h3>
                        <p>
                            Enviamos tus paquetes, mudanzas y cargas personales desde Estados Unidos hacia Colombia vía marítima.
                            <br /><br />
                            Servicios:
                            <br />
                            🚚 Mudanzas completas<br />
                            📦 Cajas personales o familiares<br />
                            🖥️ Electrodomésticos y tecnología<br />
                            🛋️ Muebles y artículos del hogar<br />
                            🎁 Envíos especiales para ocasiones (cumpleaños, navidad, etc.)<br /><br />
                            Todo con seguimiento, soporte personalizado y entregas hasta la puerta (en muchas ciudades).
                        </p>
                    </div>
                    <div className="feature-icon">
                        <img src="icono-tiempo.png" alt="Icono tiempo" />
                    </div>
                </div>

                <div className="feature fade-in">
                    <div className="feature-text">
                        <h3>¿Cómo lo hacemos?</h3>
                        <p>Nuestro proceso es sencillo, transparente y acompañado:</p>
                        <ol>
                            <li><strong>Cotizas tu envío</strong> fácilmente en nuestra web o por WhatsApp.</li>
                            <li><strong>Recolectamos</strong> tus cosas (o las llevas a un punto designado).</li>
                            <li>Las <strong>preparamos y consolidamos</strong> con seguridad para el viaje.</li>
                            <li>Realizamos el <strong>envío marítimo</strong> con todos los documentos en regla.</li>
                            <li>En Colombia, nuestros aliados hacen la <strong>entrega en casa</strong>.</li>
                        </ol>

                        <p><strong>Beneficios:</strong></p>
                        <ul>
                            <li>📦 Seguimiento en todo momento</li>
                            <li>📲 Atención personalizada</li>
                            <li>🔐 Seguridad garantizada</li>
                        </ul>
                    </div>
                    <div className="feature-icon">
                        <img src="icono-seguridad.png" alt="Icono seguridad" />
                    </div>
                </div>

                <div className="back">
                    <p className="back-text">Agencia respaldada por:</p>
                    <img className="img-back" src="https://americanlogisticcargo.com/wp-content/uploads/2023/04/logo-american-1.png" alt="Logo respaldo" />
                </div>
            </div>
        </section>
    );
};

export default WeAre;
