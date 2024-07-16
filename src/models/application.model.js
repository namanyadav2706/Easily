import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    name: String,
    email:String,
    phone: Number,
    skills: [{type:String}],
    expericence: Number,
    resume: String,
    job_id: {
        type: mongoose.Types.ObjectId,
        ref: 'JobModel'
    },
    applier_id: {
        type: mongoose.Types.ObjectId,
        ref: 'UserModel'
    }
})

const ApplicationModel = mongoose.model('ApplicationModel', applicationSchema);
export default ApplicationModel;