const express = require('express')
const app = express()
const path = require('path')
const viewRouter = require('./routes/views.routes')
const controllerRouter = require('./routes/controller.routes')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)
const store = new MongoDBSession({
    uri:`${process.env.MONGODB_URI}`,
    collection: "mySessions",

})

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "hello how r you",
    store:store
}));

app.use(express.json());
app.use(bodyParser.urlencoded( { extended: false} ))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', viewRouter);
app.use('/', controllerRouter);


// export default app;
module.exports = app;