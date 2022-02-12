import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Registro from "./pages/Registro";
import Cotizacion from "./pages/Cotizacion";
import Puntos from "./pages/Puntos";
import Ingreso from "./pages/Ingreso";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/registro" element={<Registro />} />
        <Route exact path="/cotizacion" element={<Cotizacion />} />
        <Route exact path="/acumula-puntos" element={<Puntos />} />
        <Route exact path="/ingreso" element={<Ingreso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
