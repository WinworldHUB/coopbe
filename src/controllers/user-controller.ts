import { users } from "../db/schema/user";
import { db } from "../db/setup";
import { RequestHandler } from "express";
import { User } from "../types";
import stytchClient from "../stytchClient";
export const getAllUsers: RequestHandler = async (req, res) => {
  const allUsers = await db?.select().from(users);
  res.json(allUsers);
};

export const signUp: RequestHandler = async (req, res) => {
  const { name, email, address, phone, role }: User = req.body;

  if (!name || !email || !phone || !address || !role) {
    return res
      .status(400)
      .json({ success: false, data: null, message: "All fields are required" });
  }

  try {
    const stytchresponse = await stytchClient.magicLinks.email.loginOrCreate({ email });

    if (stytchresponse.user_created) {
      await db
      ?.insert(users)
      .values({
        name: name,
        email: email,
        phone: phone,
        address: address,
        role: role,
      });

    return res.status(201).json({
      success: true,
      data: { name, email },
      message: "Added Successfully",
      stytchresponse
    });
    }
   
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, data: null, message: "Unable to add", error });
  }
};
