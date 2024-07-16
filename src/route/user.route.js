import express from "express";
import UserController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const userRouter = express.Router();
const userController = new UserController();

userRouter.get('/register',(req, res) => res.render('registration'))
userRouter.post('/register', (req, res) => userController.addUser(req,res));
userRouter.get('/login',(req, res) => res.render("login",{msg:null}))
userRouter.post('/login',(req,res) => userController.login(req,res));
userRouter.get('/getuser',authMiddleware,(req,res) => userController.getUser(req,res));
export default userRouter;