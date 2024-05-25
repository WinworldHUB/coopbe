import { Router } from "express";
import { getAllUsers , createUser} from "../controllers/user-controller";


const userRouter = Router();

userRouter.get("", getAllUsers);
userRouter.post("", createUser);

export default userRouter ;