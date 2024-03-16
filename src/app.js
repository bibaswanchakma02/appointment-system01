const express = require('express')
const app = express()
var path = require('path')
var indexRouter = require('./routes/index'); 



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