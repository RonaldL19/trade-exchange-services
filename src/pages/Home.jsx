import Are from "../components/Are"
import { CarouselSlider } from "../components/Carousel"
import FourCards from "../components/FourCards"
import Shipping from "../components/Shipping"
import '../styles/Home.css';

export const HomePage = () => {
  return (
    <>
      <CarouselSlider />
      <div className="prueba-flex">
        <Shipping />
        <Are />
      </div>
      <FourCards />
    </>
  )
}