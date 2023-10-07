import JobModel from '../models/job.model.js';
import path from 'path';

class JobController{
    
    getJobs(req, res){
        let jobs = JobModel.getAll();
        res.render('all-jobs',{jobs:jobs,msg:null})
    }

    addNewJob(req, res){
        console.log(req.body);
        JobModel.add(req.body);
        res.render('index',{msg:"Job Added Successfully"});
    }

    getUpdateJob(req, res){
        const id = req.params.id;
        const jobFound = JobModel.getById(id);
        if(jobFound){
            res.render('update-job',{job:jobFound});
        }else{
            res.status(401).send('Job Not Found!!!')
        }
    }

    postUpdateJob(req,res){
        JobModel.update(req.params.id);
        let jobs = JobModel.getAll();
        res.render('all-jobs',{jobs:jobs,msg:null})
    }

    deleteJob(req,res){
        const id = req.params.id;
        const jobFound = JobModel.getById(id);
        if(!jobFound){
            res.status(401).send('Job Not Found!!!')
        }
        JobModel.delete(id);
        let jobs = JobModel.getAll();
        res.render('all-jobs',{jobs:jobs,msg:null})
    }

    applyJob(req,res){
        const id = req.params.id;
        console.log(id);
        res.render('apply-job',{Id:id})
    }
}

export default JobController;