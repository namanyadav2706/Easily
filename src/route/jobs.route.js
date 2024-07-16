import express from "express";
import JobController from "../controllers/job.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const jobRouter = express.Router()
const jobController = new JobController();

jobRouter.get('/newjob',(req, res) => res.render('new-job'))
jobRouter.post('/newjob',authMiddleware,(req,res) => jobController.addNewJob(req,res))

jobRouter.get('/:id',authMiddleware, (req,res) => jobController.getJob(req,res))
jobRouter.get('/jobs',authMiddleware, (req,res) => jobController.getJobs(req,res))

jobRouter.get('/update/:id',authMiddleware,jobController.getUpdateJob);
jobRouter.post('/update/:id',authMiddleware, (req,res) => jobController.postUpdateJob(req,res));

jobRouter.delete('/delete/:id',authMiddleware,jobController.deleteJob);
jobRouter.get('/apply/:id',authMiddleware, (req,res) => jobController.applyJob(req,res))
jobRouter.get('/filter',authMiddleware, (req,res) => applicationController.filterApplications(req,res));

export default jobRouter;

