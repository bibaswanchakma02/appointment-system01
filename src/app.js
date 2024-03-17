const express = require('express')
const app = express()
const path = require('path')
const indexRouter = require('./routes/index')
const bodyParser = require('body-parser')



app.use(express.json());
app.use(bodyParser.urlencoded( { extended: false} ))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);


//ROUTES


//home route
// app.use('/', function (req, res) {
//     res.render('index');
// })

// app.get('/login', function(req,res,next)){
    
// }

// export default app;
module.exports = app;