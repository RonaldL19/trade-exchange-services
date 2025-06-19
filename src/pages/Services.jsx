import MaritimeService from '../components/MaritimeService'
import AgencyBacked from "../components/AgencyBacked"
import Footer from '../components/Footer'

export const Services = () => {
  return (
    <>
      <div className="container">
        <MaritimeService />
        <AgencyBacked />
      </div>
      <Footer />
    </>
  )
}