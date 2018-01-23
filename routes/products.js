const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// listar productos
router.get('/', (req, res, next) => {
  Product.find({}, (err, products) => {
    res.render('products/index', { products });
  });
});

// mostrar formulario para crear un producto
router.get('/new', (req, res, next) => {
  res.render('products/new');
});

// ruta del formulario para crear un producto
router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
  };
  // const product = req.body;
  Product.create(product, (err, docs) =>{
    if (err) { 
      next(err);
    } else {
      res.redirect('/products');
    }
  });
});

router.get('/:id', (req, res, next) => {
  const productId = req.params.id;
  console.log('ID', productId);

  Product.findById(productId, (err, product) => {
    if (err) { next(err) }
    res.render('products/show', { product });
  });
});

router.get('/:id/edit', (req, res, next) => {
  const productId = req.params.id;

  Product.findById(productId, (err, product) => {
    if (err) { next(err); }
    res.render('products/edit', { product });
  });
});

router.post('/:id', (req, res, next) => {
  const productId = req.params.id;

  const updateProduct = {
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
  };

  Product.findByIdAndUpdate(productId, updateProduct, (err, product) => {
    if (err) { next(err); }
    res.redirect('/products');
  });
});

router.post('/:id/delete', (req, res, next) => {
  const productId = req.params.id;

  Product.findByIdAndRemove(productId, (err, product) => {
    if (err) { next(err); }
    res.redirect('/products');
  });
});

module.exports = router;
