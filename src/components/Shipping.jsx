import Colombia from '../assets/images/mudanzas-colombia.png';
import USA from '../assets/images/mudanzas-locales.png';
import '../styles/Shipping.css';

const Shipping = () => {
    return (
        <div className="father-shipping">
            {/* CARD 1 */}
            <div className="service-card">
                <img src={Colombia} alt="Mudanzas a Colombia" className="main-image" />
                <div className="card-content">
                    <div className='content-are'>
                        <h3 className="title">Servicio Marítimo</h3>
                        <p className="description">
                            Nuestro servicio de envíos de paquetería Courier internacional aéreo garantiza una entrega puerta a puerta rápida y confiable en toda Centro y Sur América. Los envíos aéreos son la opción ideal cuando la velocidad es esencial.
                        </p>
                        <div className="links">
                            <a href="#" className="link">Ver Servicio →</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 2 
            <div className="service-card">
                <img src={USA} alt="Mudanzas Locales" className="main-image" />
                <div className="card-content">
                    <div className='content-are'>
                        <h3 className="title">Servicio Marítimo</h3>
                        <p className="description">
                            Nuestro servicio de envíos de paquetería Courier internacional aéreo garantiza una entrega puerta a puerta rápida y confiable en toda Centro y Sur América. Los envíos aéreos son la opción ideal cuando la velocidad es esencial.
                        </p>
                        <div className="links">
                            <a href="#" className="link">Ver Servicio →</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Shipping;
