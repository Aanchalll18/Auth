import express from 'express'
import AuthControllers from '../controllers/AuthControllers.js';

const userRoute=express.Router();

userRoute.post('/register',AuthControllers)

export default userRoute;