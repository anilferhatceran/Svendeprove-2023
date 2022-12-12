import './App.css'
import './index.css'
import Header from "./Components/Header"
import Frontpage from "./Components/Frontpage"
import dummyData from './dummyData'
import Card from './Components/Card'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About'
import MapTest from './Components/MapTest'
import CasePage from './Components/CasePage'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <div className=''>
          <Header/>
          <Routes>
            <Route path="/" element={<Frontpage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/test" element={<MapTest/>}/>
            <Route path="/case" element={<CasePage/>}/>
          </Routes>
          <Footer/>
      </div>
    </Router>
  )
}

export default App

