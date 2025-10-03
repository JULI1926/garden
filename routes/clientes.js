const express = require('express');
const router = express.Router();

// Obtener todos los clientes
router.get('/', (req, res) => {
  res.json({ message: 'Obteniendo todos los clientes' });
});

// Obtener un cliente por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Obteniendo el cliente con ID: ${id}` });
});

// Crear un nuevo cliente
router.post('/', (req, res) => {
  const clienteData = req.body;
  res.json({ message: 'Creando un nuevo cliente', data: clienteData });
});

// Actualizar un cliente por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.json({ message: `Actualizando el cliente con ID: ${id}`, data: updatedData });
});

// Eliminar un cliente por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Eliminando el cliente con ID: ${id}` });
});

module.exports = router;