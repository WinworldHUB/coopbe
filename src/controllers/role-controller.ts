import { RequestHandler } from "express";
import { db } from "../db/setup";
import { roles } from "../db/schema/user";


export const getRoles: RequestHandler = async (req, res) => {
    const allRoles = await db?.select().from(roles);
    res.json(allRoles);
  };
  