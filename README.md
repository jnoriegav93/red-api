# Node.js Red

Este proyecto es una aplicación Node.js que utiliza varias bibliotecas para manejar autenticación, manejo de cookies, registro de solicitudes, y más. Fue desarrollado con el objetivo de demostrar una arquitectura básica de una aplicación web utilizando Express, MongoDB, y JWT para la autenticación.

## Dependencias

Las siguientes son las dependencias principales utilizadas en este proyecto:

- **bcryptjs**: Utilizado para el hash de contraseñas.
- **cookie-parser**: Middleware para analizar las cookies en el objeto `request`.
- **express**: Framework web para Node.js.
- **jsonwebtoken**: Biblioteca para crear y verificar tokens JWT.
- **mongodb**: Cliente de MongoDB para Node.js.
- **mongoose**: ODM (Object Data Modeling) para MongoDB.
- **morgan**: Middleware para registrar solicitudes en el servidor.
- **serverless-http**: Utilizado para adaptar Express a funciones sin servidor (serverless).
- **zod**: Biblioteca para la validación de esquemas.

## Scripts

Este proyecto utiliza los siguientes scripts:

- **test**: Script para ejecutar pruebas. Actualmente, solo muestra un mensaje de error ya que no se especificaron pruebas.
- **dev**: Inicia el servidor en modo de desarrollo con `nodemon`, lo que permite la recarga automática del servidor al detectar cambios en el código.
- **start**: Inicia el servidor en modo de producción con `nodemon`.

## Configuración

Antes de ejecutar el proyecto, asegúrate de tener instalado Node.js y npm. También necesitarás tener una instancia de MongoDB en ejecución.
