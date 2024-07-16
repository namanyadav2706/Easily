import express from "express";
import ApplicationController from "../controllers/application.controller.js";
import { uploadFile } from "../middlewares/apply-job.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const applicationController = new ApplicationController();
const applicationRouter = express.Router();

applicationRouter.post('/apply/:id',authMiddleware,uploadFile.single('resume'),(req,res) => applicationController.addApplication(req,res))

applicationRouter.get('/:id/applicants',authMiddleware,(req,res) => applicationController.getAllApplicants(req,res))
applicationRouter.get('/:id/applicants/:applicantid',authMiddleware,(req,res) => applicationController.getApplicant(req,res))
applicationRouter.put('/:id/applicants/:applicantid',authMiddleware,(req,res) => applicationController.updateApplication(req,res))
applicationRouter.delete('/:id/applicants/:applicantid',authMiddleware,(req,res) => applicationController.deleteApplication(req,res))
export default applicationRouter;