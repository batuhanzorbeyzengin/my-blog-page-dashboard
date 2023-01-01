/* eslint-disable import/no-anonymous-default-export */
import { sign } from "../../../services/jwt_sign_verify";
import { serialize } from "cookie";

const secret = process.env.SECRET;

export default async function (req, res) {
  const { username, password } = req.body;

  // Check in the database
  // if a user with this username
  // and password exists
  if (username === "admin" && password === "admin") {
    const token = await sign(
      "testing",
      secret
    );

    const serialised = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
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