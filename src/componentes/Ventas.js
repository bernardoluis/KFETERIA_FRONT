import React, { useEffect, useState } from 'react';
import { obtenerProductosDisponibles, registrarVenta } from '../servicios/ventasServ';

const Ventas = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosDisponibles = await obtenerProductosDisponibles();
        setProductos(productosDisponibles);
      } catch (error) {
        setMensaje('Error al cargar los productos disponibles');
      }
    };
    cargarProductos();
  }, []);

  const manejarVenta = async () => {
    try {
      const venta = {
        sku: productoSeleccionado,
        cantidad: parseInt(cantidad, 10),
      };
      await registrarVenta(venta);
      setMensaje('Venta realizada');
    } catch (error) {
      setMensaje('Error al realizar la venta');
    }
  };

  return (
    <div className='p-6 rounded-md shadow-md '>
      <h2 className='pb-3'>Realizar Venta</h2>
      {mensaje && <p className='p-2 text-green-500 text-center text-xl font-semibold'>{mensaje}!</p>}

      <select className="mb-4 p-2 border rounded" value={productoSeleccionado} onChange={(e) => setProductoSeleccionado(e.target.value)}>
        {productos.map((producto) => (
          <option key={producto.sku} value={producto.sku}>
            {producto.nombre} - Stock: {producto.stock}
          </option>
        ))}
      </select>

      <input className="mb-4 p-2 border rounded ml-2" type="number" value={cantidad} min="1" onChange={(e) => setCantidad(e.target.value)} />
      <button onClick={manejarVenta} className="bg-[#173165]  text-white py-2 px-4 rounded ml-4">Realizar Venta</button>
    </div>
  );
};

export default Ventas;
