import { useEffect } from 'react';
import MaritimeService from '../components/MaritimeService'
import AgencyBacked from "../components/AgencyBacked"
import AskedQuestions from "../components/AskedQuestions"
import Price from '../components/Price'
import Footer from '../components/Footer'

export const Services = () => {
  useEffect(() => {
      document.title = "Mudanzas a Colombia - Trade Exchange Services LLC";
    }, []);
  return (
    <>
      <div className="container">
        <MaritimeService />
        <AskedQuestions />
        <Price />
        <AgencyBacked />
      </div>
      <Footer />
    </>
  )
}