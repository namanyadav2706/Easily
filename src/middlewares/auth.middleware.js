import jwt from 'jsonwebtoken';

const authMiddleware = (req,res,next) =>{
    const token = req.cookies["token-jwt"];
    if(!token){
        return res.status(401).send("Unauthorized")
    }

    try{
        const payload = jwt.verify(token,"mysecret");
        req.user = payload.user;
        req.userid = payload.id;
    }catch(err){
        return res.status(401).send("Unauthorized")
    }
    
    next();
}

export default authMiddleware;