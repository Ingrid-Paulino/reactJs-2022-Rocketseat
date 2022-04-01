import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalogo";

export function AppRoutes() {
  return(
    <Router>
      <Routes>{/* Garante que uma unica rota esteja visivel por vez */}
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}