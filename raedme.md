
1- Iniciar proyecto con npm init -y
2 - Instalar dependencias,  express sequelize pg pg-hstore cors dotenv,  (npm i jsonwebtoken : generador de token, npm i bcrypt : encriyptacion de contrasena)
3 - Instalar dependencias de desarrollo nodemon morgan -D
4 - Estructura de carpetas
-src
--- /services
--- /models
--- /controllers
--- /routes
--- /middlewares
--- /seeders
--- /tests
--- /utils
--- /templates
app.js
server.js

5.- Scripts start, dev en package.json
6.- Crear un server basico
7.- configurar la conexion a bd (base de datos)
8.- AUTENTIFICAR LA BASE DE DATOS en app.js
9.- Crear un modelo generico de usuarios.
10.- crear el init models.
11.- Sincronizar la base de datos.
12.- Registar usuario --> creacion de usuarios
  "1234" --> encriptar las contrasenas
   bcrypt
13.- Autenticacion con el login   

1.- Iniciar proyecto con npm init -y 2.- instalar dependencias express sequelize pg pg-hstore cors dotenv 3.- instalar dependencias de desarrollo nodemon morgan 4.- Estructura de carpetas /src --- /services --- /models --- /controllers --- /routes --- /middlewares --- /seeders --- /tests --- /utils --- /templates app.js server.js 5.- Scripts start, dev en package.json 6.- Crear un server básico 7.- Configurar la conexión a bd 8.- Autenticar la base de datos en app.js 9.- Crear un modelo generico de usuarios 10.- Crear el init models 11.- Sincronizar la base de datos
