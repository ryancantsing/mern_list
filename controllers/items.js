var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = {
    list: function(req, res){
        Item.find({}).sort('Date').exec((err, item) => {
            console.log("Get List Checkpoint controller")
            if(err){
                res.json({ message: "Oh geez something's wrong", err})
            } else {
                res.json({message: "Got em", item})
            }
        })
    },
    create: function(req, res){
        console.log("Checkpoint create controllers whaaat ", req.body );
        var item = new Item({
            name: req.body.name
        })
        item.save((err, item) => {
            if(err){
                res.json({ message: "Something went wrong", err})
            } else {
                res.json({ message: "Successfully added!", item})
            }
        })
    },
    delete: function(req, res){
        const id = req.params.id
        console.log("Checkpoint delete controller")
        var item = Item.findById({_id: id})
        item.remove((err) => {
            if(err, id){
                res.json({message: "something went wrong deleting item", err})
            } else {
                res.json({message: "successfully deleted!", id})
            }
        })
        
    }
}