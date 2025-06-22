import React from 'react';
import { Link } from 'react-router-dom';
import We from '../assets/images/somos.png';
import logo from '../assets/images/logo.png';
import commitment from '../assets/images/commitment.png';
import weDo from '../assets/images/weDo.png';
import AreMoving from '../assets/images/AreMoving.png';
import ArePlan from '../assets/images/ArePlan.png';
import '../styles/CoverAre.css';

const CoverAre = () => {
    return (
        <section className="container-weAre">
            <div className="front-page">
                <img className="img-we" src={We} alt="Imagen principal" />
                <div className="overlay"></div>
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
                    <img src={commitment} alt="Icono tiempo" />
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
                    <img src={weDo} alt="Icono seguridad" />
                </div>
            </div>

            <div className="Cover-cards">
                <div className="Cover-card">
                    <img src={AreMoving} alt="Presupuesto sin costo" className="Cover-card-img" />
                </div>
                <div className="Cover-card">
                    <img src={ArePlan} alt="Servicio al cliente" className="Cover-card-img" />
                </div>
            </div>
        </section>
    );
};

export default CoverAre;
