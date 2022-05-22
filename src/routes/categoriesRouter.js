const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    categories.push({
      id: faker.lorem.words(),
      hamburguesas: faker.lorem.words(),
      platos_fuertes: faker.lorem.words(),
      perros: faker.lorem.words(),
      papas: faker.lorem.words(),
      limonadas: faker.lorem.words(),
      sodas: faker.lorem.words(),
      bebidas: faker.lorem.words(),
      servezas: faker.lorem.words(),
      domicilios: faker.lorem.words(),
    });
  }
  res.json(categories);
});

router.get('/filter', (req, res) => {
  res.send('categories with a filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: "exampleID",
    hamburguesas: "HamburguerExample",
    platos_fuertes: "ExampleplatosFuertes",
    perros: "perrosExample",
    papas: "papasExample",
    limonadas: "limonadasExample",
    sodas: "sodasExample",
    bebidas: "bebidasExample",
    servezas: "servezasExample",
    domicilios: "domiciliosExample",
  });
});

module.exports = router;
