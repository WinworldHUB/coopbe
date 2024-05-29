import { Router } from "express";
import { login, getAllUsers , signUp} from "../controllers/user-controller";


const userRouter = Router();

userRouter.get("", getAllUsers);
userRouter.post("/signup", signUp);
userRouter.post("/login", login); 
export default userRouter ;