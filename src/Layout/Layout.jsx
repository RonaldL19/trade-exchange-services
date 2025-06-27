import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/Layout.css'

export const Layout = () => {
  return (
    <>
      <div className='content-layout'>
        <Header/>          
          <main>
            <Outlet />
          </main>
      </div>
    </>
  )
}
