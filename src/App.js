import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import PaginaInventario from './paginas/PaginaInventario';
import PaginaVentas from './paginas/PaginaVentas';
import PaginaLogin from './paginas/PaginaLogin';
import NavBar from './componentes/Nav';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);
  return (
    <Router>
      <div className="App">
        <NavBar token={token} setToken={setToken} />
        <Routes>
          <Route path="/login" element={<PaginaLogin setToken={setToken} />} />
          <Route path="/inventario" element={token ? <PaginaInventario /> : <Navigate to="/login" />} />
          <Route path="/ventas" element={token ? <PaginaVentas /> : <Navigate to="/login" />} />
          <Route path="/" element={token ? <Navigate to="/inventario" /> : <Navigate to="/login" />} />
          <Route path="*" element={<h1 className="text-center text-2xl text-red-500">Página no encontrada</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
