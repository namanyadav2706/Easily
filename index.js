import express from 'express';
import path from 'path';
import layout from 'express-ejs-layouts';
import jobRouter from './src/route/jobs.route.js';
import userRouter from './src/route/user.route.js';
import applicationRouter from './src/route/application.route.js';
import db from './src/config/mongoose.js';
import cookieParser from 'cookie-parser';

const Port = 5000;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.set("view engine","ejs");
app.set("views",path.join(path.resolve(),"src",'views'))

app.use(layout);
app.use(express.static('src/views'));

app.get('/',(req, res) => res.render("index",{msg:null}))
app.use('/api/job',jobRouter)
app.use('/api/user',userRouter)
app.use('/api/app',applicationRouter)

app.use(express.static('src/views'));

app.listen(Port,()=>{
    console.log(`Server is running on Port: ${Port}`)
})