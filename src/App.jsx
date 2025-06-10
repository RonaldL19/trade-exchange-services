import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../src/App.css";
import { Layout } from "./Layout/Layout";
import { HomePage } from './pages/Home';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

