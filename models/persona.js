const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  telefono: String,
  asunto: String,
  mensaje: String,
});

const Persona = mongoose.model('Persona', personaSchema);

module.exports = Persona;
