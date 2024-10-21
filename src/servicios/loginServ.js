import axios from 'axios';

const API_URL = process.env.REACT_APP_URL_API_BACK;

export const login = async (nombre_usuario, contrasena) => {
  try {
    const response = await axios.post(`${API_URL}/usuarios/login`, { nombre_usuario, contrasena });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return token;
    
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    throw new Error('Error en el inicio de sesión');
  }
};

export const obtenerToken = () => {
  return localStorage.getItem('token');
};
