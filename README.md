#Cafetería Konecta - Frontend
Este es el frontend de la aplicación Cafetería Konecta.

#Requisitos
Antes de comenzar, asegúrate de tener lo siguiente instalado en tu máquina:
Node.js (v14 o superior)
instalar dependencias: npm install
Git (para clonar el repositorio)
Backend del proyecto corriendo (ver README del backend)

#ruta del proyecto
el front del proyecto corre en el PUERTO 4000 (este puerto se define en el back en app.js)


#EJECUCION DEL PROYECTO:
npm start

# inicio en el proyecto
para poder ver las funciones enecesario loguarse el usuario esta en el back como: usuario: admin , contraseña: contraseña123
esto trabaja con un token  con jwt para la segurida de las consultas.

#Carpetas:
1. componentes/
Esta carpeta contiene todos los componentes reutilizables de la aplicación. Estos son los bloques con los que se construyen las páginas.

FormularioProducto.js: Formulario que permite crear o editar un producto.
Inventario.js: Componente que muestra todos los productos en el inventario.
ListaProductos.js: Componente que lista los productos disponibles para la venta.
Nav.js: Barra de navegación para moverse entre las distintas secciones de la aplicación.
Ventas.js: Componente que permite realizar ventas, seleccionando productos y actualizando el stock.
2. paginas/
Esta carpeta contiene los componentes que representan páginas completas de la aplicación.

PaginaInventario.js: Página que renderiza el componente de inventario junto con otros elementos adicionales.
PaginaLogin.js: Página de inicio de sesión (actualmente no implementada, pero puedes agregar autenticación en el futuro).
PaginaVentas.js: Página que muestra la sección para realizar ventas de productos.
3. servicios/
Esta carpeta contiene la lógica para realizar llamadas a la API y gestionar la interacción con el backend. Cada archivo maneja un conjunto específico de funciones.

loginServ.js: Servicio para manejar el inicio de sesión y autenticación.
productoServ.js: Servicio para gestionar las peticiones relacionadas con productos (crear, editar, listar, eliminar).
ventasServ.js: Servicio para realizar ventas y actualizar el stock de los productos.

