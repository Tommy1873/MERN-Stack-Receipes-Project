const Receipe = require("../Models/Receipe");
const mongoose = require("mongoose");
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
            if(!mongoose.Types.ObjectId.isValid(id))
            {
                return res.status(400).json({
                "success" : false,
                "message" : "Not a valid id",
                })
            }
            let data = await Receipe.findById(id);
            if(!data)
            {
                return res.status(404).json({
                    "success" : false,
                    "message" : "Receipe not found!",
                })
            }
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
    update : async (req,res) => {
        let id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(400).json({
            "success" : false,
            "message" : "Not a valid id",
            })
        }
        let data = await Receipe.findByIdAndUpdate(id);
        if(!data)
        {
            return res.status(404).json({
                "success" : false,
                "message" : "Receipe not found!",
            })
        }
        return res.json({
            "success" : true,
            "message" : "updated success",
            data
        })
    },
    destroy : async (req,res) => {
        let id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(400).json({
            "success" : false,
            "message" : "Not a valid id",
            })
        }
        let data = await Receipe.findByIdAndDelete(id);
        if(!data)
        {
            return res.status(404).json({
                "success" : false,
                "message" : "Receipe not found!",
            })
        }
        return res.json({
            "success" : true,
            "message" : "delete success"
        })
    }
}

module.exports = ReceipeController;