import Are from "../components/Are"
import { CarouselSlider } from "../components/Carousel"
import FourCards from "../components/FourCards"
import Shipping from "../components/Shipping"

export const HomePage = () => {
  return (
    <>
      <CarouselSlider />
      <Shipping />
      <Are />
      <FourCards />
    </>
  )
}