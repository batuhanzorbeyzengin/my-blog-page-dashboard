import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()


export default async function handler(req, res) {
    const { email, firstName, lastName, password } = req.body;
    try {
        if (req.body && req.method == 'POST') {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await prisma.user.create({
                data: {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    password: hashedPassword
                },
            })
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}