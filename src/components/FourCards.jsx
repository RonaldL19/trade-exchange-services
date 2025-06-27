import '../styles/FourCards.css';
import card1 from '../assets/images/card1.png';

const cardsData = [
  {
    title: 'Regresa a Colombia con beneficios de Ley 1565',
    text: 'Aprovecha el Plan Retorno y trae tus pertenencias sin pagar impuestos. ¡Mudanza aérea o marítima fácil, segura y con respaldo legal!',
    img: card1,
    color: '#1d9bf0'
  },
  {
    title: 'De regreso a Colombia, entrevista a Diana Rueda CEO American Logistic Cargo Corp.”',
    text: 'Escuche esta entrevista con Diana Rueda para que aprenda del proceso de regresar a Colombia a disfrutar su retiro. Conozca la Ley de Retorno, la exención de impuestos, proceso de mudanza y mucho mas.',
    img: 'https://americanlogisticcargo.com/wp-content/uploads/2023/06/Screenshot_4-1024x532.png',
    color: '#1d9bf0',
    link: 'https://youtu.be/h-DqLKXSQ8I?si=1IzGSGg65AhJql5C'
  }
];

const FourCards = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <a
          key={index}
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="news-card"
          style={{ backgroundImage: `url(${card.img})` }}
        >
          <div className="overlay">
            <span className="category">{card.title}</span>
            <p className="summary">{card.text}</p>
            <div className="underline" style={{ backgroundColor: card.color }}></div>
          </div>
        </a>
      ))}
    </div>

  );
};

export default FourCards;
