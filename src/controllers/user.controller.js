import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

class UserController{
    async addUser(req,res){
        console.log(req.body);
        
        let user =  await UserModel.findOne({email:req.body.email})
       
        // if user doesn't found
        if(!user){
            //crrate the user and redirect to sign-in page
            let user = await UserModel.create(req.body);
            
        // redirect back if the user found
        }else{
            res.redirect('back');
        }
        res.render("index",{msg:"User Registered Successfully"})
    }

    async login(req,res){
        let {email,password} = req.body;

        try{
            const userFound = await UserModel.findOne({email,password});
            console.log(userFound);
            if(!userFound){
                res.render("login",{msg:"Incorrect Credientials"})
            }

            const token = jwt.sign({"id":userFound._id,"user":userFound.email},"mysecret",{expiresIn:60*60*24})
            res.cookie("token-jwt",token)
            res.render("index",{msg:"Successfully Logged In"})
        }catch(err){
            return res.status(501).send("Internal Server Error")
        }
        
    }

    async getUser(req,res){
        const token = req.cookies
        const user = await UserModel.findOne({_id:req.userid})
        return res.send(user);
    }
}

export default UserController;