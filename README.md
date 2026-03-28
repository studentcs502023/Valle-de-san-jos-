# Módulo de Autenticación - Equipo Backend

## Historias de Usuario

1. **Registro de Usuarios (Docentes y Administrativos) - #8**
   - **Como** nuevo usuario **quiero** registrarme...

2. **Login de Usuarios (Autenticación) - #6**
   - **Como** usuario registrado **quiero** iniciar sesión...

3. **Modelo de Datos y Roles - #7**
   - **Como** sistema **quiero** diferenciar entre Docente y Administrativo...


## Estructura del Proyecto
- `controllers/`: Lógica de negocio.
- `models/`: Esquemas de base de datos (MongoDB).
- `routes/`: Definición de rutas REST.
- `middlewares/`: Filtros de seguridad (JWT).
- `app.js`: Punto de entrada de la aplicación.
- `.env`: Variables de entorno.
