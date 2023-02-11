/* eslint-disable import/no-anonymous-default-export */
import { serialize } from "cookie";

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;
  const user = cookies.user;

  if (!jwt) {
    return res.json({ message: "Not logged in..." });
  } else {
    const serialised = serialize("OursiteJWT", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV,
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    const userSerialized = serialize("user", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV,
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", [serialised, userSerialized]);

    res.status(200).json({ message: "Successfuly logged out!" });
  }
}