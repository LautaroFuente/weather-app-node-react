import './App.css'
//import ViewWeather from './components/ViewWeather'
//import SearchWeather from './components/SearchWeather'
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home"

function App() {


  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />

              </Routes>
            </BrowserRouter>
    </>
  )
}

export default App
