/* eslint-disable import/no-anonymous-default-export */
import { sign } from "../../../services/jwt_sign_verify";
import { serialize } from "cookie";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const secret = process.env.SECRET;

export default async function (req, res) {
  const { username, password } = req.body;

  const userData  = await prisma.user.findMany({
    where: {
      email: username,
      password: password
    },
  });

  // Check in the database
  // if a user with this username
  // and password exists
  if (userData[0].email === username && userData[0].password === password) {
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

    res.status(200).json({ message: "Success!" });
  } else {
    res.status(401).json({ message: "Invalid credentials!" });
  }
}