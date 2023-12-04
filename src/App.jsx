import { Fragment } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import '../src/index.css'
// import Register from './Components/Register/Register.jsx'

function App() {


  return (
    <BrowserRouter>
    <Fragment>
    {/* <Register/> */}
    <Home/>
    <Navbar/>
    <Routes>
      <Route path="/Navbar" element={<Navbar/>}>
      </Route>
    </Routes>
    
    </Fragment>
    </BrowserRouter>
  )
}

export default App
