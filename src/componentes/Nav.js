import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  return (
    <nav className="bg-[#173165] p-4 text-white">
    <ul className="flex items-center w-full">
      <li><Link to="/inventario" className="hover:underline ml-4">Inventario</Link></li>
      <li><Link to="/ventas" className="hover:underline ml-4">Ventas</Link></li>
      {token && (<li className="ml-auto"><button onClick={cerrarSesion} className="hover:underline font-semibold">
       Cerrar Sesión </button></li>
      )}
    </ul>
  </nav>
  );
};

export default NavBar;
