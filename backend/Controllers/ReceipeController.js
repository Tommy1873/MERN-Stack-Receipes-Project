const Receipe = require("../Models/Receipe");

const ReceipeController = {
    index : async (req,res) => {
        try 
        {
            let data = await Receipe.find().sort({createdAt : -1});
            return res.json({
                "success" : true,
                "message" : "Receipes retrieved successfully",
                data
            });
        } catch (e)
        {
            return res.status(500).json({
                "success" : false,
                "message" : e.message || "Internal server error",
            })
        }
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
    show : async (req,res) => {
        try
        {
            let id = req.params.id;
            let data = await Receipe.findById(id);
            return res.json({
                "success" : true,
                "message" : "Receipe retrieved successfully",
                data
            })
        } catch (e)
        {
            return res.status(500).json({
                "success" : false,
                "message" : e.message || "Internal server error",
            })
        }
    },
    update : (req,res) => {
        return res.json({
            "message" : "updated success"
        })
    },
    destroy : (req,res) => {
        return res.json({
            "message" : "delete success"
        })
    }
}

module.exports = ReceipeController;