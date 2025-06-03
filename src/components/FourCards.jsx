import '../styles/FourCards.css';

const cardsData = [
  {
    title: 'Joven de 19 años sería responsable de intento de robo en norte de Bogotá; iba en bicicleta',
    text: 'El presunto delincuente habría disparado contra una de sus víctimas, en medio del atraco en el barrio Quinta Camacho, durante la tarde de este lunes festivo.',
    img: 'https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4548237-h-m.webp',
    color: '#1d9bf0'
  },
  {
    title: 'D1 responde a acusaciones de supuestas condiciones laborales "inadecuadas" con trabajadores',
    text: 'La empresa respondió públicamente a las acusaciones, afirmando que cumplen con la normativa laboral y que están abiertos al diálogo con sus empleados.',
    img: 'https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4553482-h-m.webp',
    color: '#1d9bf0'
  },
  {
    title: 'Mala noticia para Perú, antes del juego vs. Colombia; tuvo que tomar inesperada decisión',
    text: 'Uno de los jugadores clave se lesionó durante el entrenamiento, lo que obligó al técnico a replantear la estrategia para el partido contra Colombia.',
    img: 'https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4560000A-h-m.webp',
    color: '#1d9bf0'
  },
  {
    title: 'Altafulla frenó duro a Melissa Gate en ‘LCFLF’ y lo aplauden en redes: “El único capaz”',
    text: 'La escena del episodio generó miles de comentarios en redes sociales, destacando la actitud del personaje frente a las injusticias.',
    img: 'https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4557385A-h-m.webp',
    color: '#1d9bf0'
  }
];

const FourCards = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div
          className="news-card"
          key={index}
          style={{ backgroundImage: `url(${card.img})` }}
        >
          <div className="overlay">
            <span className="category">{card.title}</span>
            <h3 className="headline">{card.subtitle}</h3>
            <p className="summary">{card.text}</p>
            <div className="underline" style={{ backgroundColor: card.color }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourCards;
