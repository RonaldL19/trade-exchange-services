import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../src/App.css";
import { Layout } from "./Layout/Layout";
import { HomePage } from './pages/Home';
import { WhoWeAre } from './pages/WhoWeAre';
import { ContactCompany } from './pages/ContactCompany';
import { Services } from './pages/Services'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />}/>
            <Route path="/quienes-somos" element={<WhoWeAre />}/>
            <Route path="/Contacto" element={<ContactCompany />}/>
            <Route path="/Servicios" element={<Services />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

