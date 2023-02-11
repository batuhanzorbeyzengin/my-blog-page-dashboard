/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from '@prisma/client'
import cookie from "cookie";

const prisma = new PrismaClient()

export default async function (req, res) {

  const userId = req.body.userId;

  const allCategories = await prisma.category.findMany({
    where: {
      authorId: {
        in: userId
      }
    },
  });

  res.status(200).json(allCategories);
}