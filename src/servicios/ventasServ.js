import axios from 'axios';
import { obtenerToken } from './loginServ';

const API_URL = process.env.REACT_APP_URL_API_BACK;

// Obtener productos disponibles para la venta
export const obtenerProductosDisponibles = async () => {
  const token = obtenerToken();
  const response = await axios.get(`${API_URL}/productos`, {
    headers: { 'Autorizacion': `${token}` }
  });
  return response.data.filter(producto => producto.stock > 0);
};

// Registrar una venta
export const registrarVenta = async (venta) => {
  const token = obtenerToken();
  const response = await axios.post(`${API_URL}/ventas`, venta, {
    headers: { 'Autorizacion': `${token}` }
  });
  return response.data;
};
