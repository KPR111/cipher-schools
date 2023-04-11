import express from "express"
import userController from "../controllers/userController.js";
const router=express.Router();
import tokenMiddleware from "../middlewares/tokenMiddleware.js"


router.post('/signup',userController.signupUser);
router.post('/login',userController.loginUser);
router.put('/update-password',tokenMiddleware.auth,userController.updatePassword)




export default router