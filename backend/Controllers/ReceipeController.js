const ReceipeController = {
    index : (req,res) => {
        return res.json({
            "message" : "Get success"
        });
    },
    store : (req,res) => {
        return res.json({
            "message" : "Store success"
        })
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