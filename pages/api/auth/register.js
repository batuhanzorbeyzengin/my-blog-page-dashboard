import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler (req, res) {
    if(req.body && req.method == 'POST'){
        const user  = await prisma.user.create({
            data: {
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password
            },
        })
        res.status(200).json(user);
    } else {
        res.status(500).json(error);
    }
}