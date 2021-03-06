var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
//link your database down here!
mongoose.connect('mongodb://localhost/shopping_list')
.then(() => console.log('MongoDB connected...')).catch(err => console.log(err));

var models_path = path.join(__dirname, '../models');


fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});