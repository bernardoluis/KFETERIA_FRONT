import React, { useState, useEffect } from 'react';
import { obtenerProductos, eliminarProducto } from '../servicios/productoServ';
import ListaProductos from './ListaProductos';

const Inventario = ({ onEditar }) => {
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    try {
      const productos = await obtenerProductos();
      setProductos(productos);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  const manejarEliminarProducto = async (referencia) => {
    try {
      await eliminarProducto(referencia);
      cargarProductos();
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return <ListaProductos productos={productos} onEliminar={manejarEliminarProducto} onEditar={onEditar} />;
};

export default Inventario;
