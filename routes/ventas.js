const express = require('express');
const router = express.Router();

// Obtener todas las ventas
router.get('/', (req, res) => {
  res.json({ message: 'Obteniendo todas las ventas' });
});

// Obtener una venta por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Obteniendo la venta con ID: ${id}` });
});

// Crear una nueva venta
router.post('/', (req, res) => {
  const ventaData = req.body;
  res.json({ message: 'Creando una nueva venta', data: ventaData });
});

// Actualizar una venta por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.json({ message: `Actualizando la venta con ID: ${id}`, data: updatedData });
});

// Eliminar una venta por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Eliminando la venta con ID: ${id}` });
});

module.exports = router;