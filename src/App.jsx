import { Routes, Route } from "react-router-dom"
//import Layout from "./components/layout/Layout"

import Home from './views/home/Home'
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App