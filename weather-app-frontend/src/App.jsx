import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home"
import CityTop from './pages/CityTop';
import History from './pages/History';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {


  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/city-top" element={<CityTop />} />
                <Route path="/history" element={<History />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </BrowserRouter>
    </>
  )
}

export default App
