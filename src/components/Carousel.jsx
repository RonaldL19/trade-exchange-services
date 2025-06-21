import { Carousel } from 'react-responsive-carousel'
import Carousel1 from '../assets/images/return.png';
import Carousel2 from '../assets/images/asesoria.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/Carousel.css'

export const CarouselSlider = () => {
  return (
    <Carousel>
      <div>
        <img src={Carousel1} alt="Mudanzas a Colombia" className="main-image" />
      </div>
      <div>
        <img src={Carousel2} alt="Mudanzas a Colombia" className="main-image" />
      </div>
    </Carousel>
  )
}
