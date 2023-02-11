import { PrismaClient } from '@prisma/client'
import cookie from "cookie";

const prisma = new PrismaClient()


export default async function handler(req, res) {
  const { categoryTitle, categoryUrl, categoryDescription } = req.body;
  const cookies = cookie.parse(req.headers.cookie || '');
  const user = cookies.user ? JSON.parse(cookies.user) : null;
  try {
    if (req.body && req.method == 'POST') {
      const newCategory = await prisma.category.create({
        data: {
          title: categoryTitle,
          url: categoryUrl,
          description: categoryDescription,
          author: {
            connect: {
              id: user.id
            },
          },
        },
      })
      res.status(200).json(newCategory);
    }
  } catch (error) {
    res.status(500).json(error, newCategory);
  }
}