import CoverAre from "../components/CoverAre"
import AgencyBacked from "../components/AgencyBacked"
import Footer from '../components/Footer'

export const WhoWeAre = () => {
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