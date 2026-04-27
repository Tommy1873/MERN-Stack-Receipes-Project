const { validationResult } = require('express-validator');

module.exports  =   (req,res,next) => {
                        const result = validationResult(req); 
                        if(!result.isEmpty())
                        {
                            return res.status(422).json({
                                'success' : false,
                                'message' : result.mapped()
                            })
                        } else {
                            next();
                        }
                    }