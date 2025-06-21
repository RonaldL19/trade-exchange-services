import { useEffect } from 'react';
import CardsContact from '../components/CardsContact'
import Footer from '../components/Footer'

export const ContactCompany = () => {
  useEffect(() => {
      document.title = "Contacto - Trade Exchange Services LLC";
    }, []);
  return (
    <>
      <div className="container">
        <CardsContact />
      </div>
      <Footer />
    </>
  )
}