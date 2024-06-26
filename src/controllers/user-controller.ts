import { societyUsers, users } from "../db/schema/user";
import { db } from "../db/setup";
import { RequestHandler } from "express";
import { LoginRequest, User } from "../types";
import stytchClient from "../stytchClient";
import { Name } from "stytch";
export const getAllUsers: RequestHandler = async (req, res) => {
  const allUsers = await db?.select().from(users);
  res.json(allUsers);
};

export const signUp: RequestHandler = async (req, res) => {
  const { firstName, lastName, email, phone, role, address, societyId, password }: User = req.body;

  if (!firstName || !lastName || !email || !phone || !role || !address || !societyId || !password) {
    return res
      .status(400)
      .json({ success: false, data: null, message: "All fields are required" });
  }

  try {
    const name = `${firstName} ${lastName}`;
    const stytchresponse = await stytchClient.passwords.create({
      email: email,
      password: password,
      session_duration_minutes: 527040,
    });



    if (stytchresponse.status_code === 200) {
      const userInsert = await db
        ?.insert(users)
        .values({
          name: name,
          email: email,
          phone: phone,
          address: address,
          role: role,
        }).returning({ insertedId: users.id });

        const  userId = userInsert[0].insertedId;
        console.log(userId);

        await db?.insert(societyUsers).values({
          user_id: userId,
          society_id: societyId,
        });
        

      return res.status(201).json({
        success: true,
        data: { name, email },
        message: "Added Successfully",
        session_duration: "366 days",
        session_token: stytchresponse.session_token,
        session_jwt: stytchresponse.session_jwt,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, data: null, message: "Unable to add", error });
  }
};


export const login: RequestHandler = async (req, res) => {
  const {  email,  password }: LoginRequest = req.body;

  if ( !email ||  !password) {
    return res
      .status(400)
      .json({ success: false, data: null, message: "All fields are required" });
  }

  try {
    const stytchresponse = await stytchClient.passwords.authenticate({ email: email,
      password: password,
      session_duration_minutes:527040
     });

    if (stytchresponse.status_code === 200) {

    return res.status(201).json({
      success: true,
      message: "Logged In Successfully",
      "session_duration": "366 days",
      "session_token": stytchresponse.session_token,
      "session_jwt": stytchresponse.session_jwt
    });
    }
   
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, data: null, message: "Unable to login", error });
  }
};