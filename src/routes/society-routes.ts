import { Router } from "express";
import { getSocieties } from "../controllers/society-controller";

const societyRouter = Router();

societyRouter.get("", getSocieties);

export default societyRouter;