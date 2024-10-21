import React, { useState, useEffect } from 'react';
import { crearProducto, actualizarProducto } from '../servicios/productoServ';

const FormularioProducto = ({ productoExistente, onGuardar }) => {
  const [producto, setProducto] = useState({
    nombre: '',
    sku: '',
    precio: '',
    peso: '',
    categoria: '',
    stock: '',
  });

  // Este useEffect actualizará el estado de 'producto' cuando se reciba un productoExistente nuevo
  useEffect(() => {
    if (productoExistente) {
      setProducto({
        nombre: productoExistente.nombre,
        sku: productoExistente.sku,
        precio: productoExistente.precio,
        peso: productoExistente.peso,
        categoria: productoExistente.categoria,
        stock: productoExistente.stock,
      });
    } else {
      // Si no hay productoExistente, resetea el formulario
      setProducto({
        nombre: '',
        sku: '',
        precio: '',
        peso: '',
        categoria: '',
        stock: '',
      });
    }
  }, [productoExistente]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const manejarSubmit = async (e) => {
   /*  e.preventDefault(); */
    try {
      if (productoExistente) {
        await actualizarProducto(productoExistente.sku, producto);
      } else {
        await crearProducto(producto);
      }
      onGuardar();
    } catch (error) {
      console.error('Error al guardar el producto', error);
    }
  };


  return (
    <form onSubmit={manejarSubmit} className="bg-white p-6 rounded-md shadow-md grid grid-cols-3 gap-4">
      <div>
        <input name="nombre" value={producto.nombre} onChange={manejarCambio} placeholder="Nombre del producto" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <input name="sku" value={producto.sku} onChange={manejarCambio} placeholder="Referencia" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <input type="number" name="precio" value={producto.precio} onChange={manejarCambio} placeholder="Precio" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <input type="number" name="peso" value={producto.peso} onChange={manejarCambio} placeholder="Peso" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <input name="categoria" value={producto.categoria} onChange={manejarCambio} placeholder="Categoría" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <input type="number" name="stock" value={producto.stock} onChange={manejarCambio} placeholder="Stock" required className="mb-4 p-2 border rounded w-full" />
      </div>
      <button type="submit" className="bg-[#173165] text-white py-2 px-4 rounded">
        {productoExistente ? 'Actualizar Producto' : 'Guardar Producto'}
      </button>
    </form>
  );
};

export default FormularioProducto;
