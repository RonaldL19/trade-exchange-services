import Are from "../components/Are"
import { CarouselSlider } from "../components/Carousel"
import FourCards from "../components/FourCards"
import Shipping from "../components/Shipping"
import Footer from '../components/Footer'
import '../styles/Home.css';

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <CarouselSlider />
        <div className="medium-home">
          <Shipping />
          <Are />
        </div>
        <FourCards />
      </div>
      <Footer />
    </>
  )
}