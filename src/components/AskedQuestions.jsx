import React from 'react';
import '../styles/AskedQuestions.css';
import questions from '../assets/images/questions.png';
import plan from '../assets/images/plan.png';

const AskedQuestions = () => {
  return (
    <section className="faq-section">
      <h2 className="faq-title">Preguntas Frecuentes</h2>

      <div className="faq-grid">
        <div className="faq-left">
          <img src={questions} alt="Menaje mudanza" className="faq-image" />

          <div className="faq-item">
            <h4>¿QUÉ SE ENTIENDE POR MENAJE?</h4>
            <p>
              El conjunto de bienes, aparatos y demás accesorios de utilización normal en una vivienda. El menaje debe haber sido adquirido durante el periodo de permanencia en el exterior y proceder del país donde se encontraba residenciado.
            </p>
          </div>

          <div className="faq-item">
            <h4>¿QUÉ PUEDO LLEVAR EN UN MENAJE?</h4>
            <p>
              Los muebles, aparatos y accesorios de utilización normal en la vivienda, con algunas excepciones y bienes de capital relacionados con la actividad del usuario, si es objeto de plan retorno. En caso contrario no podrá llevar bienes de capital ni nuevos ni usados.
              <br />
              Haga <a href="https://drive.google.com/file/d/1GIGjF1W3dAjgBlNRl95i43OoA9hAzpQS/view" target="_blank"><span className="faq-link">click</span></a> para conocer qué puede llevar en sus menajes.
            </p>
          </div>
        </div>

        <div className="faq-right">
          <div className="faq-item">
            <h4 className="highlight">¿IMPORTA MI ESTATUS LEGAL EN EL EXTRANJERO PARA EL INGRESO DE MI MENAJE A COLOMBIA?</h4>
            <p>
              No importa. Lo que importa es su condición de colombiano, demostrable con su cédula de ciudadanía y su pasaporte con sello de salida e ingreso al país.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="highlight">¿CUÁLES SON LAS MODALIDADES PARA INGRESAR MI MENAJE AL PAÍS?</h4>
            <p>
              <strong>EL PLAN RETORNO</strong> le permite ingresar a Colombia demostrando, ante el Ministerio de Relaciones Exteriores, que ha vivido más de tres años en el exterior. Requiere aprobación y estará exento de impuestos.
            </p>
            <a href="https://drive.google.com/file/d/1YYbXei9hqHvVAKtI8GzPpeWRD9Oi9H0e/view" target="_blank" rel="noopener noreferrer"><button className="faq-label">LEY 1565 DEL 2012</button></a>

            <p>
              <strong>TRIBUTO ÚNICO.</strong> Se aplicará una tarifa única del 15% sobre el valor CIF declarado del menaje. Requiere certificación de residencia y haber vivido más de dos años fuera del país.
            </p>
            <a href="https://drive.google.com/file/d/1O49y0IMaw7Vhqez7wrTkJwD4w1Ij8g_C/view" target="_blank" rel="noopener noreferrer"><button className="faq-label">TRIBUTO ÚNICO</button></a>
            
          </div>

          <div className="faq-item">
            <h4 className="highlight">¿QUÉ EL SERVICIO DE GRUPAJE O COMPARTIDO?</h4>
            <p>
              Cuando un contenedor de cualquier capacidad se llena con mercancías de diferentes personas y se despachan una vez se complete. Este servicio le ahorrará dinero, pero puede generar demoras mientras el proceso de llenado se completa. Cada usuario deberá llenar los requisitos de la modalidad a que se acoge.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="highlight">¿REQUIERO UN EMPAQUE ESPECIAL?</h4>
            <p>
              Sí, cada bien a transportar debe cumplir, para su protección, unas normas de empaque internacional. En las que American Logistic Cargo Corp. le proporcionará este servicio y el material de empaque necesario.
            </p>
          </div>

          <div className="faq-item">
            <img src={plan} alt="Amigo colombiano" className="faq-banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskedQuestions;
