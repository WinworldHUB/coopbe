import { Router } from "express";
import { authenticate, getAllUsers , signUp} from "../controllers/user-controller";


const userRouter = Router();

userRouter.get("", getAllUsers);
userRouter.post("/signup", signUp);
userRouter.get("/authenticate", authenticate); 
export default userRouter ;