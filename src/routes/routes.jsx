import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/home"
import Shoes from "../pages/shoes/shoes"
import Shirts from "../pages/shirts/shirts"
import ConfirmOrder from "../pages/ConfirmOrder/confirmOrder"

const routesApp = () => {
  const BackdropAction = ({ children }) => {
    return children
  }

  return(
    <BackdropAction>
      <Routes>
        <Route path="CarrinhoPortifolio/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Shirts" element={<Shirts />} />
        <Route path="/ConfirmOrder" element={<ConfirmOrder />} />
      </Routes>
    </BackdropAction>
  )
}

export default routesApp