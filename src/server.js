require('dotenv').config()
const app = require('./app')
const connectDB = require('./db/index')



// import 'dotenv/config'
// import connectDB from './db/index.js';
// import app from './app.js';

// app.get("/", (req,res)=>{
//     res.send("test 69")
// })

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed! ", err);
});


 