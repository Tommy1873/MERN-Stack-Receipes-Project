const express = require('express');
const ReceipeController = require('../Controllers/ReceipeController');
const router  = express.Router();
const validate = require('../Middlewares/validate');
const { createRecipeValidator } = require('../Validators/receipe.validator');

router.get('',ReceipeController.index);
router.post('',createRecipeValidator,validate,ReceipeController.store);
router.get('/:id',ReceipeController.show);
router.patch('/:id',ReceipeController.update);
router.delete('/:id',ReceipeController.destroy);

module.exports = router;