// Importar los módulos necesarios
import express from "express"; // Módulo para crear el servidor web
import fs from "fs"; // Módulo para leer y escribir archivos
import fetch from "node-fetch"; // Módulo para realizar solicitudes HTTP
import { v4 as uuidv4 } from "uuid"; // Módulo para generar identificadores únicos
import pkg from "pg";
const { Pool } = pkg;

const app = express(); // Crear una instancia de Express
const PORT = 3000; // Puerto en el que el servidor escuchará las solicitudes

app.use(express.json()); // Middleware para manejar el cuerpo de las peticiones en formato JSON

//-------------------Aca terminan end poitns

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "pipe1234",
  database: "bancosolar",
  port: 5432,
});

// Pantalla inicial
app.get("/", (req, res) => {
  // Ruta para servir el archivo index.html
  fs.readFile("index.html", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error al cargar la página.");
    } else {
      res.send(data);
    }
  });
});

// Endpoint para agregar un nuevo usuario
app.post("/usuario", async (req, res) => {
  const { nombre, balance } = req.body;

  try {
    // PostgreSQL generará automáticamente el id autoincremental
    const query = "INSERT INTO usuarios (nombre, balance) VALUES ($1, $2)";
    await pool.query(query, [nombre, balance]);
    res.status(201).json({ message: "Transferencia creada con éxito" });
  } catch (error) {
    console.error("Error al agregar usuario:", error);
    res.sendStatus(500);
  }
});

// Endpoint para obtener todos los usuarios registrados
app.get("/usuarios", async (req, res) => {
  try {
    const query = "SELECT * FROM usuarios";
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.sendStatus(500);
  }
});

// Endpoint para actualizar un usuario
app.put("/usuario/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, balance } = req.body;

  try {
    const query = "UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3";
    await pool.query(query, [nombre, balance, id]);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.sendStatus(500);
  }
});

// Endpoint para eliminar un usuario
app.delete("/usuario/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM usuarios WHERE id = $1";
    const result = await pool.query(query, [id]);

    // Verificar si se eliminó algún registro (rowCount > 0)
    if (result.rowCount > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404); // No se encontró el usuario con el ID especificado
    }
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.sendStatus(500);
  }
});

// Endpoint para realizar una nueva transferencia
app.post("/transferencia", async (req, res) => {
  const { emisor, receptor, monto } = req.body;

  try {
    // Iniciamos una transacción para asegurar la consistencia de la base de datos
    const client = await pool.connect();
    try {
      // Primero, restamos el monto al balance del emisor
      const query1 = "UPDATE usuarios SET balance = balance - $1 WHERE id = $2";
      await client.query(query1, [monto, emisor]);

      // Luego, sumamos el monto al balance del receptor
      const query2 = "UPDATE usuarios SET balance = balance + $1 WHERE id = $2";
      await client.query(query2, [monto, receptor]);

      // Finalmente, registramos la transferencia en la tabla de transferencias
      const query3 = "INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, NOW())";
      await client.query(query3, [emisor, receptor, monto]);

      // Si todo ha sido exitoso, confirmamos la transacción
      await client.query("COMMIT");
      res.sendStatus(201);
    } catch (error) {
      // Si ha ocurrido algún error, revertimos la transacción
      await client.query("ROLLBACK");
      console.error("Error al realizar transferencia:", error);
      res.sendStatus(500);
    } finally {
      // Finalmente, liberamos el cliente de la conexión
      client.release();
    }
  } catch (error) {
    console.error("Error al conectarse a la base de datos:", error);
    res.sendStatus(500);
  }
});

// Endpoint para obtener todas las transferencias registradas
app.get("/transferencias", async (req, res) => {
  try {
    const query = "SELECT * FROM transferencias";
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener transferencias:", error);
    res.sendStatus(500);
  }
});


//-------------------ACA TERMINAN LAS APIS

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});


// Grupo Boldo; Boris Guiñez, Felipe Parra, Loreto Godoy, Daniel Mendez, Jose Fuentealba, Zimram Blanco
