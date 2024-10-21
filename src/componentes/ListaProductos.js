import React from 'react';

const ListaProductos = ({ productos, onEliminar, onEditar }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
      <ul className="space-y-2">
        {productos.map((producto) => (
          <li key={`${producto.sku}-${producto.nombre}`} className="flex flex-col bg-gray-50 p-3 rounded shadow-sm">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{producto.nombre}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => onEditar(producto)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-700 transition duration-300"
                >
                  Editar
                </button>
                <button
                  onClick={() => onEliminar(producto.sku)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300"
                >
                  Eliminar
                </button>
              </div>
            </div>
            <div className="text-gray-700">
              <p>Categoría: {producto.categoria}</p>
              <p>Precio: ${producto.precio}</p>
              <p>Peso: {producto.peso} kg</p>
              <p>Stock: {producto.stock}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;
