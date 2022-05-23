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

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'User Created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Users patched',
    data: body,
    id: id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: "User Deleted",
    id
  });
});

module.exports = router;
