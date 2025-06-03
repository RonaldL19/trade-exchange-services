import { CarouselSlider } from "./Carousel"
import Footer from "./Footer"
import Header from "./Header"
import Shipping from "./Shipping"
import Are from "./Are"
import FourCards from "./FourCards"

export const ProductCard = () => {
  return (
    <>
      <Header />
      <CarouselSlider />
      <Shipping />
      <Are />
      <FourCards />
      <Footer />
    </>
  )
}