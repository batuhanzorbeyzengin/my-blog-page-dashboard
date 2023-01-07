import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

function request(table, data = false, method) {
    return new Promise(async (resolve, reject) => {
        if (data) {
            const response = await prisma.table.method({
                data: {
                    email: 'elsa@prisma.io',
                    name: 'Elsa Prisma',
                    country: 'Italy',
                    age: 30,
                },
            })
            const result = await response.json()
            if (response.ok) {
                resolve(result)
            } else {
                resolve(result)
            }
        }
        
    })
}

export const post = (url, data) => request(url, data, "POST")