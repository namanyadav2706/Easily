import UserModel from "../models/user.model.js";
class UserController{
    addUser(req,res){
        console.log(req.body);
        UserModel.add(req.body);
        res.render("index",{msg:"User Registered Successfully"})
    }

    login(req,res){
        let {email,password} = req.body;
        const userFound = UserModel.authUser(email,password);
        console.log(userFound);
        if(!userFound){
            res.render("login",{msg:"Incorrect Credientials"})
        }
        res.render("index",{msg:"Successfully Logged In"})
    }
}

export default UserController;