const express = require('express');
const mongoose = require('mongoose');
const Persona = require('./models/persona');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://elhuxley277:huxley123@cluster0.jwmgb7y.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('Error de conexión a MongoDB:', error));
db.once('open', () => console.log('Conectado a MongoDB'));

// Agregar middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'hoja-de-vida')));

app.use(express.urlencoded({ extended: true }));

// Define una ruta para cargar el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define la ruta para manejar las solicitudes POST desde el formulario HTML
app.post('/guardar', async (req, res) => {
  try {
    const nuevaPersona = new Persona(req.body);
    await nuevaPersona.save();
    res.send('Datos guardados correctamente en MongoDB.');
  } catch (error) {
    console.error('Error al guardar en MongoDB:', error);
    res.send('Hubo un error al guardar los datos.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

