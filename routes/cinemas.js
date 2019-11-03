const express = require('express');
const router = express.Router();
const cinemasController = require('../app/api/controllers/cinemas');

router.get('/', cinemasController.getAll);
router.post('/', cinemasController.create);
router.get('/:cinemaId', cinemasController.getById);
router.put('/:cinemaId', cinemasController.updateById);
router.delete('/:cinemaId', cinemasController.deleteById);

module.exports = router;