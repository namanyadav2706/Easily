import JobModel from '../models/job.model.js';
import path from 'path';

class JobController{
    async getJob(req, res){
        const id = req.params.id;
        let job = await JobModel.findOne({_id:id})
        if(!job){
            return res.status(404).send("Job not found")
        }
        return res.status(200).send(job)
    }
    
    async getJobs(req, res){
        let jobs = await JobModel.find();
        // res.render('all-jobs',{jobs:jobs,msg:null})
        return res.status(200).send({jobs});
    }

    async addNewJob(req, res){
        console.log(req.body);
        req.body.poster_id = req.userid;
        const newJob = await JobModel.create(req.body);
        res.render('index',{msg:"Job Added Successfully"});
    }

    async getUpdateJob(req, res){
        const id = req.params.id;
        const jobFound = await JobModel.findOne({_id:id});
        if(jobFound){
            res.render('update-job',{job:jobFound});
        }else{
            res.status(401).send('Job Not Found!!!')
        }
    }

    async postUpdateJob(req,res){
        const id = req.params.id;
        const updatedJob = await JobModel.findByIdAndUpdate(id,req.body,{new:true});
        return res.status(200).send(updatedJob);
        // let jobs = await JobModel.find();
        // res.render('all-jobs',{jobs:jobs,msg:null})
    }

    async deleteJob(req,res){
        const id = req.params.id;
        const deletedJob = await JobModel.findByIdAndDelete(id,{new:true});
        if (deletedJob){
            return res.status(200).send(deletedJob);
        }
        return res.status(404).send("No Job found with this id");
        // res.render('all-jobs',{jobs:jobs,msg:null})
    }

    async applyJob(req,res){
        const id = req.params.id;
        const job = await JobModel.findOne({_id:id});
        res.render('apply-job',{Id:id,Job:job});
    }

    async filterJobs(req,res){
        const {minDate, maxDate, company} = req.body;
        const startDate = new Date(minDate)
        const endDate = new Date(maxDate)

        
        const jobs = await JobModel.find(
            {date:{$gt:startDate,$lt:endDate},company:company}
            )

        // const jobs = await JobModel.find({$and:[
        //     {company:company},
        //     {date:{$gt:startDate}},
        //     {date:{$lt:endDate}}
        //     ]
        // })
        
        return res.status(200).send({jobs});
    }

}

export default JobController;