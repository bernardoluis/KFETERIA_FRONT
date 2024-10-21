import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../servicios/loginServ';

const PaginaLogin = ({ setToken }) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await login(nombreUsuario, contrasena);
      alert('Inicio de sesión exitoso');
      setToken(token); // Actualiza el estado del token
      navigate('/inventario'); // Redirigir al inventario después de iniciar sesión
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert('Error en el inicio de sesión');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Inicio de Sesión</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Usuario: [admin]</label>
          <input
            type="text"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Contraseña [contraseña123]</label>
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition duration-300">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default PaginaLogin;
