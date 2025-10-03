const express = require('express');
const router = express.Router();

// Obtener todas las plantas
router.get('/', (req, res) => {
  res.json({ message: 'Obteniendo todas las plantas' });
});

// Obtener una planta por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Obteniendo la planta con ID: ${id}` });
});

// Crear una nueva planta
router.post('/', (req, res) => {
  const plantaData = req.body;
  res.json({ message: 'Creando una nueva planta', data: plantaData });
});

// Actualizar una planta por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.json({ message: `Actualizando la planta con ID: ${id}`, data: updatedData });
});

// Eliminar una planta por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Eliminando la planta con ID: ${id}` });
});

module.exports = router;