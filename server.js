const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

// DB configt
require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(8000, function(){
    console.log("Listening on port 8000");
})
