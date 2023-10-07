class ApplicationModel{
    constructor(id,name,email,phone,skills,exp,resume,jobId){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.skills = skills;
        this.exp = exp;
        this.resume = resume;
        this.jobId = jobId
    }

    static add(name,email,phone,skills,exp,resume,jobId){
        applications.push(
            new ApplicationModel(applications.length+1,
                name,
                email,
                phone,
                skills,
                exp,
                resume,
                jobId)
        )

    }
}
export default ApplicationModel;
let applications = [
    new ApplicationModel(1,"Naman Rao","naman@live.com",425453454,"MERN","2","",1),
    new ApplicationModel(2,"Vikesh","vikesh@live.com",676574654,"DevOps","6","",2),
    new ApplicationModel(3,"Michel","michel@live.com",54634545,"Cloud","4","",3),
]