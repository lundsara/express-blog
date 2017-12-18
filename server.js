//require the use of express
const express = require('express');
//use morgan as the logger
const logger = require('morgan');
//require body parser to parse data
const bodyParser = require('body-parser');
//define and require path
const path = require ('path');
//define and require method override to update and delete
const methodOverride = require('method-override');
//define and require router
const blogsRouter = require('./routes/blogs-routes');

//define port
const PORT = process.env.PORT || 3000;
//method handle view of editing a post
const app = express();

app.set('views', path.join(__dirname, 'views'));
//require dotenv to hide use of api key
require ('dotenv')
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use('/blogs', blogsRouter);

app.get('/', (req,res) => res.render('blogs/blogs-index', {
 message:'This is my Good Sweat index page',
 blog:[]
}));









app.listen(PORT);
// to prove it worked, print to the terminal
console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);

