# Módulo de Autenticación - Equipo Backend

## Historias de Usuario

1. **Registro de Usuarios**
   - **Como** nuevo usuario **quiero** registrarme en la plataforma con mi nombre, correo y contraseña **para** crear una cuenta personal.

2. **Login de Usuarios**
   - **Como** usuario registrado **quiero** iniciar sesión con mi correo y contraseña **para** acceder al panel de control de la aplicación de forma segura.

3. **Visualización del Dashboard**
   - **Como** usuario autenticado **quiero** ver un dashboard o perfil con mi información **para** confirmar que mi sesión está activa y ver mis datos.

## Estructura del Proyecto
- `controllers/`: Lógica de negocio.
- `models/`: Esquemas de base de datos (MongoDB).
- `routes/`: Definición de rutas REST.
- `middlewares/`: Filtros de seguridad (JWT).
- `app.js`: Punto de entrada de la aplicación.
- `.env`: Variables de entorno.
