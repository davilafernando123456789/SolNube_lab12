// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pool = require('./database');

const app = express();
const port = 4200;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/contactos/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contacto.html'));
});

app.get('/contactos/:id/editar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'editar.html'));
});

app.get('/crear', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'crear.html'));
});

// Definir modelo de contacto
const Contact = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM contactos');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM contactos WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (contacto) => {
    const [result] = await pool.query('INSERT INTO contactos SET ?', [contacto]);
    return result.insertId;
  },

  update: async (id, contacto) => {
    await pool.query('UPDATE contactos SET ? WHERE id = ?', [contacto, id]);
  },

  delete: async (id) => {
    await pool.query('DELETE FROM contactos WHERE id = ?', [id]);
  },
};

// Rutas
app.get('/contactos', async (req, res) => {
  const contactos = await Contact.getAll();
  res.json(contactos);
});

app.get('/contactos/:id', async (req, res) => {
  const id = req.params.id;
  const contacto = await Contact.getById(id);
  res.json(contacto);
});

app.post('/contactos', async (req, res) => {
  const nuevoContactoId = await Contact.create(req.body);
  const nuevoContacto = await Contact.getById(nuevoContactoId);
  res.json(nuevoContacto);
});

app.put('/contactos/:id', async (req, res) => {
  const id = req.params.id;
  await Contact.update(id, req.body);
  const contactoActualizado = await Contact.getById(id);
  res.json(contactoActualizado);
});

app.delete('/contactos/:id', async (req, res) => {
  const id = req.params.id;
  await Contact.delete(id);
  res.json({ message: 'Contacto eliminado correctamente' });
});

// Iniciar la aplicación
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
