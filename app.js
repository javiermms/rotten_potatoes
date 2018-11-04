const express = require('express')
const methodOverride = require('method-override')
const app = express()

var exphbs = require('express-handlebars');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });


// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');

// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));

const reviews = require('./controllers/reviews')(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

module.exports = app;


