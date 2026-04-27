const {body} = require('express-validator')

exports.createRecipeValidator = [
    body('title')
    .notEmpty()
    .withMessage('title is required'),

    body('description')
    .notEmpty()
    .withMessage('description is required'),

    body('ingredients')
    .notEmpty()
    .isArray({min:2})
    .withMessage('ingredients must be at least 2 items')
]