const express = require('express');

const playerController = require('../controller/player');

const router = express.Router();

router.get('/:name', playerController.search);

router.post('/', playerController.add);

//router.delete('/:id', playerController.delete);

router.put('/:id', playerController.edit);

module.exports = router;