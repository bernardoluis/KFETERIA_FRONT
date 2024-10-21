import axios from 'axios';
import { obtenerToken } from './loginServ';

const API_URL = process.env.REACT_APP_URL_API_BACK;

// Obtener productos
export const obtenerProductos = async () => {
  const token = obtenerToken();
  const response = await axios.get(`${API_URL}/productos`, {
    headers: { 'Autorizacion': `${token}` }
  });
  return response.data;
};

// Crear producto
export const crearProducto = async (producto) => {
  const token = obtenerToken();
  const response = await axios.post(`${API_URL}/productos`, producto, {
    headers: { 'Autorizacion': `${token}` }
  });
  return response.data;
};

// Actualizar producto
export const actualizarProducto = async (sku, producto) => {
  const token = obtenerToken();
  const response = await axios.put(`${API_URL}/productos/${sku}`, producto, {
    headers: { 'Autorizacion': `${token}` }
  });
  return response.data;
};

// Eliminar producto
export const eliminarProducto = async (sku) => {
  const token = obtenerToken();
  const response = await axios.delete(`${API_URL}/productos/${sku}`, {
    headers: { 'Autorizacion': `${token}` }
  });
  return response.data;
};
