import User from "../Models/UserModel.js";

export default register=async(req,res)=>{
    try {
        const {email,name,password}= req.body;
        if(!email || !password || !name){
            res.json({
                success:false,
                message:"All fields are mandatory"
            })
        }
        const user=await User.findOne(email);
        if(user){
            res.json({
                success:false,
                message:"User already exists!"
            })
        }
    } catch (error) {
        
    }
}