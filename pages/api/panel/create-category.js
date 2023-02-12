import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req, res) {
  const { userId, categoryTitle, categoryUrl, categoryDescription } = req.body;

  try {
    if (req.body && req.method == 'POST') {
      const newCategory = await prisma.category.create({
        data: {
          title: categoryTitle,
          url: categoryUrl,
          description: categoryDescription,
          author: {
            connect: {
              id: userId
            },
          },
        },
      })
      res.status(200).json(newCategory);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}