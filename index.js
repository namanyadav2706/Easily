import express from 'express';
import path from 'path';
import layout from 'express-ejs-layouts';
import JobController from './src/controllers/job.controller.js';
import UserController from './src/controllers/user.controller.js';
import ApplicationController from './src/controllers/application.controller.js';
import { uploadFile } from './src/middlewares/apply-job.middleware.js';

const Port = 5000;
const app = express();

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(path.resolve(),"src",'views'))

app.use(layout);
app.use(express.static('src/views'));

const jobController = new JobController();
const userController = new UserController();
const applicationController = new ApplicationController();
app.get('/',(req, res)=>{
    res.render("index",{msg:null});
})
app.get('/newjob',(req, res)=>{
    res.render('new-job');
})

app.post('/newjob',jobController.addNewJob)

app.get('/jobs',jobController.getJobs)
app.get('/register',(req, res)=>{
    res.render('registration');
})
app.post('/register',userController.addUser);
app.get('/login',(req, res)=>{
    res.render("login",{msg:null});
})
app.post('/login',userController.login);

app.get('/update-job/:id',jobController.getUpdateJob);
app.post('/update-job/:id',jobController.postUpdateJob);

app.get('/delete-job/:id',jobController.deleteJob);
app.get('/apply/:id',jobController.applyJob)
app.post('/apply',uploadFile.single('resume'),applicationController.addApplication)
app.use(express.static('src/views'));


app.listen(Port,()=>{
    console.log(`Server is running on Port: ${Port}`)
})