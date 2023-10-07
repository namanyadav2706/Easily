import ApplicationModel from "../models/application.model.js";
import JobModel from "../models/job.model.js";
class ApplicationController{
    addApplication(req,res){
        console.log(req.body);
        let {name,email,phone,skills,exp,jobId} = req.body;
        const file = "resume/" + req.file.filename;
        console.log(file);
        ApplicationModel.add(name,email,phone,skills,exp,file,jobId);
        let jobs = JobModel.getAll();
        res.render("all-jobs",{jobs:jobs,msg:"Successfully Applied"})
    }

    
}

export default ApplicationController;