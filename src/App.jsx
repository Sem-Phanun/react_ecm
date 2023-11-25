import { Routes, Route } from "react-router-dom"
//import Layout from "./components/layout/Layout"

import Home from './views/home/Home'
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Shop from "./views/shop/Shop"
import TvAndAudio from './views/tvandaudio/TvAndAudio'
import Smartphones from './views/smartphones/SmartPhones'
import LaptopAndPcs from './views/laptopandpcs/LaptopAndPcs'
import Gadgets from './views/gadgets/Gadgets'
import Accessory from './views/accessory/Accessory'
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/tvandaudio" element={<TvAndAudio/>}/>
        <Route path="/smartphones" element={<Smartphones/>}/>
        <Route path="/laptopandpcs" element={<LaptopAndPcs/>}/>
        <Route path="/gadgets" element={<Gadgets/>}/>
        <Route path="/accessory" element={<Accessory/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App