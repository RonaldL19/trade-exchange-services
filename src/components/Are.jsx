import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Are.css';

const Are = () => {
    return (
        <div className="card-are">
            <div className="left">
                <div className="logo-box">
                    <div className='line'></div>
                    <img src={logo} alt="Icono principal" className="icon default-icon" />
                </div>
                <div className='text-are'>
                    <h1>¿Quiénes somos?</h1>
                    <h2>ENVIOS INTERNACIONALES</h2>
                    <p>
                        Somos una empresa con raices latinas que conecta Estados Unidos con Colombia a través de envíos marítimos seguros, personalizados y sin complicaciones, cuidamos cada envío como si fuera nuestro.
                    </p>
                    <Link to="/quienes-somos">
                        <button className="btn-learn">APRENDE MÁS</button>
                    </Link>

                </div>
            </div>

            <div className="right">
                <div className="footer-info">
                    <img src={logo} alt="mundo" />
                    @sitioincreible
                </div>
            </div>
        </div>

    );
};

export default Are; 