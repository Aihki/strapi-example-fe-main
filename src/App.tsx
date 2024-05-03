import About from "./views/About";
import Home from "./views/Home";
import Layout from "./views/Layout";
import Product from "./views/Product";
import Single from "./views/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  

  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About/>} />
          <Route path="/product/:id" element={<Single />} />
        </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
