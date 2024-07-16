import ApplicationModel from "../models/application.model.js";
import JobModel from "../models/job.model.js";

class ApplicationController{
    async addApplication(req,res){
        req.body.job_id = req.params.id;
        req.body.applier_id = req.userid
        const file = "resume/" + req.file.filename;
        req.body.resume = file;

        const newApplication = await ApplicationModel.create(req.body);
        return res.status(200).send(newApplication);

    }

    async getAllApplicants(req,res){
        const id = req.params.id;
        const applications = await ApplicationModel.find({job_id:id})
        return res.status(200).send({applications})
    }

    async getApplicant(req,res){
        const job_id = req.params.id
        const applicantid = req.params.applicantid

        const applicant = await ApplicationModel.findOne({job_id:job_id,applier_id:applicantid})

        if(!applicant){
            return res.status(404).send("Not Found")
        }
        return res.status(200).send(applicant)
    }

    async updateApplication(req,res){
        const job_id = req.params.id
        const applicantid = req.params.applicantid

        const applicant = await ApplicationModel.findOne({job_id:job_id,applier_id:applicantid})

        if(!applicant){
            return res.status(404).send("Not Found")
        }

        const app_id = applicant._id;

        const updatedApplication = ApplicationModel.findByIdAndUpdate(app_id,req.body,{new:true})
        return res.status(200).send(updatedApplication)
    }

    async deleteApplication(req,res){
        const job_id = req.params.id
        const applicantid = req.params.applicantid

        const applicant = await ApplicationModel.findOne({job_id:job_id,applier_id:applicantid})

        if(!applicant){
            return res.status(404).send("Not Found")
        }

        const app_id = applicant._id;

        const deletedApplication = ApplicationModel.findByIdAndDelete(app_id,{new:true})
        return res.status(200).send(deletedApplication)
    }

    
}

export default ApplicationController;