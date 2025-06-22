import { useEffect } from 'react';
import Are from "../components/Are";
import { CarouselSlider } from "../components/Carousel";
import TrackPackage from '../components/TrackPackage';
import FourCards from "../components/FourCards";
import Shipping from "../components/Shipping";
import Footer from '../components/Footer';
import '../styles/Home.css';

export const HomePage = () => {
  useEffect(() => {
    document.title = "Inicio - Trade Exchange Services LLC";
  }, []);

  return (
    <>
      <div className="container">
        <TrackPackage />
        <CarouselSlider />
        <div className="medium-home">
          <Shipping />
          <Are />
        </div>
        <FourCards />
      </div>
      <Footer />
    </>
  );
};
