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
  const { name, email, phone, role, address }: User = req.body;

  if (!name || !email || !phone || !role || !address) {
    return res
      .status(400)
      .json({ success: false, data: null, message: "All fields are required" });
  }

  try {
    const stytchresponse = await stytchClient.magicLinks.email.loginOrCreate({ email,
      signup_magic_link_url: "http://localhost:3000/user/authenticate",
      login_magic_link_url: "http://localhost:3000/user/authenticate"
     });

    if (stytchresponse.status_code === 200) {
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


export const authenticate: RequestHandler = async (req, res) => {
  const { token } = req.query;

  if (typeof token !== 'string') {
    return res.status(400).json({
      success: false,
      message: "Invalid token",
    });
  }

  try {
    const response = await stytchClient.magicLinks.authenticate({ token });
    if (response.status_code === 200) {
      // Redirect the user to a welcome or dashboard page
      res.redirect("http://localhost:3001/");
    } else {
      res.status(400).json({
        success: false,
        message: "Magic link authentication failed",
        details: response,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Magic link authentication failed",
      error,
    });
  }
};