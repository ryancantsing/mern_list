var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"]
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = Item = mongoose.model('Item', ItemSchema)
