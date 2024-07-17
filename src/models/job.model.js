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