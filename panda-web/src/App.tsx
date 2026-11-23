import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import SpendingPage from "./pages/SpendingPage";

function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <span className="site-header__brand">PANDA</span>
        <nav className="site-nav" aria-label="Main">
          <NavLink to="/">Products</NavLink>
          <NavLink to="/spending">Spending</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/spending" element={<SpendingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
