

export default register=async(req,res)=>{
    try {
        const {email,name,password}= req.body;
        if(!email || !password || !name){
            res.json({
                success:false,
                message:"All fields are mandatory"
            })
        }
    } catch (error) {
        
    }
}