import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Pagos from './pages/Pagos';
import Propietarios from './pages/Propietarios';
import Limpieza from './pages/Limpieza';
import Stock from './pages/Stock';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 shadow">
        <ul className="flex gap-4">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/pagos">Pagos</Link></li>
          <li><Link to="/propietarios">Propietarios</Link></li>
          <li><Link to="/limpieza">Limpieza</Link></li>
          <li><Link to="/stock">Stock</Link></li>
        </ul>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagos" element={<Pagos />} />
          <Route path="/propietarios" element={<Propietarios />} />
          <Route path="/limpieza" element={<Limpieza />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

