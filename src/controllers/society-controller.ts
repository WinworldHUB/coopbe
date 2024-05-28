import { RequestHandler } from "express";
import { societies } from "../db/schema/user";
import { db } from "../db/setup";


export const getSocieties: RequestHandler = async (req, res) => {
    const allSocieties = await db?.select().from(societies);
    res.json(allSocieties);
  };
  