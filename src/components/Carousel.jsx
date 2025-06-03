import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/Carousel.css'

export const CarouselSlider = () => {
  return (
    <Carousel>
      <div>
        <img src="https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4558290-h-b.webp" alt="" />
      </div>
      <div>
        <img src="https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4556151-h-b.webp" alt="" />
      </div>
      <div>
        <img src="https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4559118-h-b.webp" alt="" />
      </div>
    </Carousel>
  )
}
