import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/home"
import Shoes from "../pages/shoes/shoes"
import Shirts from "../pages/shirts/shirts"

const routesApp = () => {
  const BackdropAction = ({ children }) => {
    return children
  }

  return(
    <BackdropAction>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Shirts" element={<Shirts />} />
      </Routes>
    </BackdropAction>
  )
}

export default routesApp