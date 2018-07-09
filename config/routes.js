var path = require('path');
var items = require('../controllers/items.js');
module.exports = function(app) {
    app.get('/list', (req, res) => {
        console.log("Made it to see shopping list");
        items.list(req, res)
    })
    app.post('/addToList', (req, res) =>{
        console.log("CHECKPOINT adding to list")
        items.create(req, res)
    })
    app.delete('/removeFromList/:id', (req, res) => {
        console.log("CHECKPOINT removing from list")
        items.delete(req, res)
    })
}