const express = require('express');
const router = express.Router();

// Obtener todo el stock
router.get('/', (req, res) => {
  res.json({ message: 'Obteniendo todo el stock' });
});

// Obtener stock por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Obteniendo el stock con ID: ${id}` });
});

// Crear un nuevo registro de stock
router.post('/', (req, res) => {
  const stockData = req.body;
  res.json({ message: 'Creando un nuevo registro de stock', data: stockData });
});

// Actualizar un registro de stock por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.json({ message: `Actualizando el stock con ID: ${id}`, data: updatedData });
});

// Eliminar un registro de stock por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Eliminando el stock con ID: ${id}` });
});

module.exports = router;