import { useEffect } from 'react';
import CoverAre from "../components/CoverAre"
import AgencyBacked from "../components/AgencyBacked"
import Footer from '../components/Footer'

export const WhoWeAre = () => {
  useEffect(() => {
      document.title = "Quienes Somos - Trade Exchange Services LLC";
    }, []);
  return (
    <>
      <div className="container">
        <CoverAre />
        <AgencyBacked />
      </div>
      <Footer />
    </>
  )
}