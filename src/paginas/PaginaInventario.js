import React, { useState } from 'react';
import Inventario from '../componentes/Inventario';
import FormularioProducto from '../componentes/FormularioProducto';

const PaginaInventario = () => {
  const [productoEditable, setProductoEditable] = useState(null);

  const manejarGuardarProducto = () => {
    setProductoEditable(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Inventario</h1>
      <FormularioProducto productoExistente={productoEditable} onGuardar={manejarGuardarProducto} />
      <Inventario onEditar={setProductoEditable} />
    </div>
  );
};

export default PaginaInventario;