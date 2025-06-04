import logo from '../assets/images/logo.png';
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                        feugiat nunc lobortis rhoncus eleifend. Curabitur et facilisis dui.
                    </p>
                    <button className="btn-learn">APRENDE MÁS</button>
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

export default Are; 1