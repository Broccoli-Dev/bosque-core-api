const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      userName: faker.name.firstName(),
      password: faker.lorem.words()
    });
  }
  res.json(users);
});

router.get('/filter', (req, res) => {
  res.send('Users with a filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    userName: "name 1",
    password: "password 123"
  });
});

module.exports = router;
