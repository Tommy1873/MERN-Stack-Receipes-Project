const Receipe = require("../Models/Receipe");

const ReceipeController = {
    index : (req,res) => {
        return res.json({
            "message" : "Get success"
        });
    },
    store : async (req,res) => {
        try
        {
            let {title,description,ingredients} = req.body;

            if (!ingredients || ingredients.length === 0) {
                return res.status(422).json({
                    success: false,
                    message: "Ingredients cannot be empty"
                }); 
            }

            const data = await Receipe.create({
                title,
                description,
                ingredients
            });
            
            return res.status(201).json({
                "success" : true,
                "message" : "Store success",
                data,
            })
        }
        catch(e)
        {
            return res.status(500).json({
                "success" : false,
                "message" : e.message || "Internal server error",
            })
        }
    },
    show : (req,res) => {
        return res.json({
            "message" : "Show success"
        })
    },
    update : (req,res) => {
        return res.json({
            "message" : "updated success"
        })
    },
    delete : (req,res) => {
        return res.json({
            "message" : "delete success"
        })
    }
}

module.exports = ReceipeController;