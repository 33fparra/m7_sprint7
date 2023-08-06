<img src="public/images/boldoMedio.png" align="right" />
 <h1 align= left ><b>Sprint7 / EquipoBoldo</b> <img src = "https://media.giphy.com/media/gF2m2JOyGReppog8hU/giphy.gif" width = 80px></h1>

<br>

## No olvides Revisar

<h2><b>Descripción del Proyecto</b> <img src ="https://media.giphy.com/media/GjhqaB166nKR4BoEnh/giphy.gif" width = 50px></h2>

📝 Transferencias bancarias(Banco Solar)

● Conectar una base de datos MySQL con Node.
● Realizar consultas DML con Node y el paquete pg.
● Realizar consultas TCL con Node y el paquete pg.
● Construir una API RESTful utilizando MySQL para la
persistencia de datos.
● Manejar errores.
● Manejar códigos de estado HTTP

El Banco Solar acaba de decidir invertir una importante suma de dinero para contratar un equipo de desarrolladores
Full Stack JavaScript que desarrollen un nuevo sistema de transferencias, y han anunciado que todo aquel que postule
al cargo debe realizar un servidor con Node, que utilice MySQL para la gestión y persistencia de datos y, simular un
sistema de transferencias.
El sistema debe permitir registrar nuevos usuarios con un balance inicial y basados en éstos, realizar
transferencias de saldos entre ellos.

Las rutas que deberás crear son las siguientes:

/GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba.

/usuario POST: Recibe los datos de un nuevo usuario y los almacena en MySQL.

/usuarios GET: Devuelve todos los usuariosregistrados con sus balances.

/usuario PUT: Recibe los datos modificados de un usuario registrado y los actualiza.

/usuario DELETE: Recibe el id de un usuario registrado y lo elimina.

/transferencia POST: Recibe los datos para realizar una nueva transferencia. Se debe ocupar una transacción SQL en
la consulta a la base de datos.

/transferencias GET: Devuelve todaslastransferencias almacenadas en la base de datos en formato de arreglo.
<br>

<h2><b>Instrucciones de Instalación</b> <img src = "https://media.giphy.com/media/3WZJkScSyfYVl7mGLd/giphy.gif" width = 60px></h2> 

⚙️ Para instalar las dependencias necesarias, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   npm install

4. Abrir el archivo html ingresando al https://localhost:3000
5. Para ejecutar: node server.js o en su defecto con nodemon server.js


<br>

<details> <img src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFtdWgyMmFrcHd4NjhuZWJ4aDJpcTlkbWlyNGQ4dDJwa2ZwZmptcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/B4AgroOi1LkdPxMllY/giphy.gif" width = 50px> <summary><b>Ver las instrucciones</b></summary> 


1. Instalar las dependencias:

   ```sh
   npm install
   ```

2. En el caso de no poder instalar las dependencias:

   ```sh
   npm install --force
   ```

3. Las librerias que estamos ocupando `package.json`:

    ````sh
    ... 
    "name": "helpers",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    + "type": "module",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
    "express": "^4.18.2",
    "pg": "^8.11.2"
    }
    ````

 
</details>

## Funcionalidades :sparkles:

✨ Con nuestra aplicacion puedes:

1. Conectarse a MySQL y realizar consultas DML para la gestión y persistencia dedatos. 
2. Usar transacciones SQL para realizar el registro de lastransferencias. 
3. Servir una API RESTful en elservidor con los datos de los usuarios almacenados en la Base de Datos. 
4. Capturar los posibles errores que puedan ocurrir a través de bloques catch o parámetros de funciones
callbacks para condicionar las funciones del servidor. 
5. Devolver correctamente los códigos de estado según las diferentessituaciones. 


<!-- ![Foto de grupo](public/images/grupoVerde.jpg) -->

## Participantes del Grupo :busts_in_silhouette:

1. Loreto Godoy : https://github.com/loreGodoyUp

2. Daniel Mendez : https://github.com/danimen81

3. Zimram Blanco : https://github.com/Zimram

4. Jose Fuentealba : https://github.com/JoseFelipeGeo

5. Boris Guiñez : https://github.com/boanguibe

6. Felipe Andres Parra : https://github.com/33fparra


### Este proyecto está bajo la licencia ADALID.
<img src="public/images/boldoMedio.png" align="right" />

