const express = require('express');
const ReceipeController = require('../Controllers/ReceipeController');
const router  = express.Router();

router.get('',ReceipeController.index);
router.post('',ReceipeController.store);
router.get('/:id',ReceipeController.show);
router.patch('/:id',ReceipeController.update);
router.delete('/:id',ReceipeController.destroy);

module.exports = router;