import User from '../models/UserModel.js'; 

const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory"
      });
    }   
    const existingUser = await User.findOne({ email }); 

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists!"
      });
    }

    res.status(201).json({
      success: true,
      message: "User registered successfully"
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};

export default register;
