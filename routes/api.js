const express = require('express');
const router = express.Router();

// Rutas API para plantas
router.get('/plantas', (req, res) => {
  res.json({ message: 'Obteniendo todas las plantas' });
});

router.get('/plantas/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Obteniendo planta con ID: ${id}` });
});

router.post('/plantas', (req, res) => {
  const data = req.body;
  res.json({ message: 'Planta creada correctamente', data });
});

router.put('/plantas/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  res.json({ message: `Planta con ID: ${id} actualizada correctamente`, data });
});

router.delete('/plantas/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Planta con ID: ${id} eliminada correctamente` });
});

// Rutas API para productos
router.get('/productos', (req, res) => {
  res.json({ message: 'Obteniendo todos los productos' });
});

router.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Obteniendo producto con ID: ${id}` });
});

router.post('/productos', (req, res) => {
  const data = req.body;
  res.json({ message: 'Producto creado correctamente', data });
});

router.put('/productos/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  res.json({ message: `Producto con ID: ${id} actualizado correctamente`, data });
});

router.delete('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Producto con ID: ${id} eliminado correctamente` });
});

// Agrega aquí más rutas para proveedores, clientes, stock y ventas

module.exports = router;