import React from 'react';
import '../styles/Price.css';
import separate from '../assets/images/separate.png';
import chart from '../assets/images/chart.png';
import amount from '../assets/images/amount.png';
import clientServices from '../assets/images/clientServices.png';

const Price = () => {
  return (
    <section className="price-section">
      <div className="price-header">
        <h1 className="price-title">Agencias Bienvenidas</h1>
        <p className="price-subtitle">Sé parte del equipo ganador!!!</p>
        <a href="https://americanlogisticcargo.com/agencias/" target="_blank" rel="noopener noreferrer"><button className="price-btn">MÁS INFORMACIÓN</button></a>
        
      </div>

      <h2 className="price-subheading">¿Cómo pedir una cotización?</h2>

      <div className="price-grid">
        <div className="price-column">
          <img src={separate} alt="Dinero y calculadora" className="price-img" />
          <p>
            Sea que su menaje requiera un contenedor completo o compartido – agrupado,
            le recomendamos, pedir su cotización a <strong>American Logistic</strong>,
            teniendo en cuenta lo siguiente:
          </p>
          <p>
            1. Separe los bienes que no desea llevar, para que los pueda vender o regalar
            a través de sus amistades. La idea de un “garaje sale” será provechosa para recoger
            algún dinero o puede solicitar a entidades como el “Salvation Army” que le recojan a
            Domicilio sin costo alguno.
          </p>
        </div>

        <div className="price-column">
        <img src={chart} alt="Dinero y calculadora" className="price-img" />
          <p>
            2. Siguiendo el cuadro que le enviaremos a su solicitud, haga el inventario cuarto por cuarto.
          </p>
          <p>
            Recuerde al tomar decisiones sobre arte y vidrios o espejos, que estos requerirán un Huacal de madera
            para su protección, lo que implica un costo adicional en el empaque y por supuesto en el volumen que ocupan.
          </p>
          <p>
            Si aun así desea llevarlos solo mencione las dimensiones que nosotros nos encargaremos de calcular el huacal.
          </p>
        </div>

        <div className="price-column">
        <img src={amount} alt="Dinero y calculadora" className="price-img" />
          <p>
            Incluya una cantidad de cajas para cada área con una medida predeterminada.
          </p>
          <p>
            Recuerde que, aunque es un estimado, intentamos llegar a un presupuesto tan cercano como sea posible.
          </p>
          <p>
            Después de cuantificar en M3 sume todo y así estableceremos si requiere un contenedor completo o agrupado.
          </p>
          <p>
            Establezca ubicación, distancia y piso entre el lugar de cargue y el parqueo del camión.
          </p>
          <p>
            Con esta información llame al:
          </p>
        </div>
      </div>

      <div className="price-cards">
        <div className="price-card">
          <img src="https://americanlogisticcargo.com/wp-content/uploads/2025/04/Pide-tu-presupuesto-1024x858.jpg" alt="Presupuesto sin costo" className="price-card-img" />
          <a href="https://wa.me/17863977418" target="_blank" rel="noopener noreferrer"><button className="price-cta">LLAMA AHORA</button></a>
        </div>
        <div className="price-card">
          <img src={clientServices} alt="Servicio al cliente" className="price-card-img" />
          <a href="https://wa.me/17863977418" target="_blank" rel="noopener noreferrer"><button className="price-cta">SERVICIO AL CLIENTE</button></a>
        </div>
      </div>
    </section>
  );
};

export default Price;