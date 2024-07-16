
// class JobModel{
//     constructor(id,name,company,desc,date,salary){
//         this.id = id;
//         this.name = name;
//         this.company = company;
//         this.desc = desc;
//         this.date = date;
//         this.salary = salary;
//     }

//     static getAll(){
//         return jobs;
//     }

//     static add(job){
//         jobs.push(
//             new JobModel(job.length+1,
//                 job.name,
//                 job.company,
//                 job.desc,
//                 job.date,
//                 job.salary
//             )
//         )
//     }

//     static getById(id){
//         return jobs.find((j)=> j.id == id)
//     }

//     static update(job){
//         const index = jobs.findIndex((j)=> j.id == job.id);
//         jobs[index] = job;
//     }

//     static delete(id){
//         const index = jobs.findIndex((j)=> j.id == id);
//         jobs[index].splice(index, 1);
//     }
// }

// export default JobModel;
// var jobs = [
//     new JobModel(1,"MERN Dev","xyz Developers","Good in JS","10/15/2023",8),
//     new JobModel(2,"Data Scientist","Decelop.AI","Great with ML","10/12/2023",10),
//     new JobModel(3,"Cloud Engineer","ABC Cloud Solutions","Fimilar with AWS","10/10/2023",12),
// ]

import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const jobSchema = new Schema({
    poster_id:{type:ObjectId,ref:"UserModel"},
    title:String,
    company: String,
    description: String,
    date: Date,
    salary: Number
},
    {timestamps:true}
)

const JobModel = mongoose.model('JobModel', jobSchema)
export default JobModel;