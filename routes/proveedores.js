const express = require('express');
const router = express.Router();

// Obtener todos los proveedores
router.get('/', (req, res) => {
  res.json({ message: 'Obteniendo todos los proveedores' });
});

// Obtener un proveedor por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Obteniendo el proveedor con ID: ${id}` });
});

// Crear un nuevo proveedor
router.post('/', (req, res) => {
  const proveedorData = req.body;
  res.json({ message: 'Creando un nuevo proveedor', data: proveedorData });
});

// Actualizar un proveedor por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.json({ message: `Actualizando el proveedor con ID: ${id}`, data: updatedData });
});

// Eliminar un proveedor por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Eliminando el proveedor con ID: ${id}` });
});

module.exports = router;