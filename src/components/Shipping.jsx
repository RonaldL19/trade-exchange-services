import Colombia from '../assets/images/envios-colombia.png'
import '../styles/Shipping.css';

const Shipping = () => {

    return (
        <>
            <div className='father-shipping'>
                <div class="service-card1">
                    <div class="icon-container">
                        <img src={Colombia} alt="Icono principal" class="icon default-icon" />
                        <img src="img/barco-hover.png" alt="Icono hover" class="icon hover-icon" />
                    </div>
                    <h3 class="title">Servicio Marítimo</h3>
                    <p class="description">
                        Nuestro servicio de envíos de paquetería Courier internacional aéreo garantiza una entrega puerta a puerta rápida y confiable en toda Centro y Sur América. Los envíos aéreos son la opción ideal cuando la velocidad es esencial.
                    </p>
                    <div class="links">
                        <a href="#" class="link">Ver Servicio →</a>
                    </div>
                </div>
                <div class="service-card2">
                    <div class="icon-container">
                        <img src="img/barco.png" alt="Icono principal" class="icon default-icon" />
                        <img src="img/barco-hover.png" alt="Icono hover" class="icon hover-icon" />
                    </div>
                    <h3 class="title">Servicio Marítimo</h3>
                    <p class="description">
                        Nuestro servicio de envíos de paquetería Courier internacional aéreo garantiza una entrega puerta a puerta rápida y confiable en toda Centro y Sur América. Los envíos aéreos son la opción ideal cuando la velocidad es esencial.
                    </p>
                    <div class="links">
                        <a href="#" class="link">Ver Servicio →</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Shipping
