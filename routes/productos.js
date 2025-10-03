const express = require('express');
const router = express.Router();

// Obtener todos los productos
router.get('/', (req, res) => {
  res.json({ message: 'Obteniendo todos los productos' });
});

// Obtener un producto por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Obteniendo el producto con ID: ${id}` });
});

// Crear un nuevo producto
router.post('/', (req, res) => {
  const productoData = req.body;
  res.json({ message: 'Creando un nuevo producto', data: productoData });
});

// Actualizar un producto por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.json({ message: `Actualizando el producto con ID: ${id}`, data: updatedData });
});

// Eliminar un producto por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Eliminando el producto con ID: ${id}` });
});

module.exports = router;