const express = require('express')
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const app = express()

app.use(methodOverride('_method'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

const reviews = require('./controllers/reviews')(app);
const Comment = require('./controllers/comments')(app);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{ 
    console.log(`App Listening Port ${port}`)
});

module.exports = app;


