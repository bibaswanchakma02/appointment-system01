const express = require('express')
const app = express()
const path = require('path')
const viewRouter = require('./routes/views.routes')
const controllerRouter = require('./routes/controller.routes')
const bodyParser = require('body-parser')
const expressSession = require('express-session')

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "hello how r you"
}));

app.use(express.json());
app.use(bodyParser.urlencoded( { extended: false} ))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', viewRouter);
app.use('/', controllerRouter);

//ROUTES


//home route
// app.use('/', function (req, res) {
//     res.render('index');
// })

// app.get('/login', function(req,res,next)){
    
// }

// export default app;
module.exports = app;