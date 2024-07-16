// class UserModel{
//     constructor(id,name,email,phone,company,industry,password){
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//         this.company = company;
//         this.industry = industry;
//         this.password = password;
//     }

//     static add(user){
//         users.push(
//             new UserModel(user.length+1,
//                 user.name,
//                 user.email,
//                 user.phone,
//                 user.company,
//                 user.industry,
//                 user.password)
//         )

//     }

//     static authUser(email,password){
//         const user = users.find((user)=>user.email == email && user.password == password);
//         return user;
//     }
// }
// export default UserModel;
// let users = [
//     new UserModel(1,"Naman Rao","naman@live.com",425453454,"Netflix","Software","naman@1999"),
//     new UserModel(2,"Vikesh","vikesh@live.com",676574654,"Google","IT and AI","vikesh@1993"),
//     new UserModel(3,"Michel","michel@live.com",54634545,"Amazon","Cloud","michel@1995"),
// ]

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: {type:String,unique:true},
  phone: Number,
  company: String,
  industry: String,
  password: String
},
  {timestamps:true}
);

const UserModel = mongoose.model('UserModel', userSchema);
export default UserModel;