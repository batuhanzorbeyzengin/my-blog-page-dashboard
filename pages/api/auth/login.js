/* eslint-disable import/no-anonymous-default-export */
import { sign } from "../../../services/jwt_sign_verify";
import { serialize } from "cookie";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

const secret = process.env.SECRET;

export default async function (req, res, next) {
  const { username, password } = req.body;
  
  try {
    const userData = await prisma.user.findMany({
      where: {
        email: username
      },
    });

    const passwordMatch = await bcrypt.compare(password, userData[0].password);

    if(!passwordMatch) {
      return res.status(401).json({ message: "Invalid password!" });
    }
  
    const token = await sign(
      "testing",
      secret
    );
  
    const serialised = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
  
    res.setHeader("Set-Cookie", serialised);

    const userProfile = await prisma.profile.findMany({
      where: {
        email: username
      },
    });
  
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(401).json({ message: "Invalid account!" });
  }
}