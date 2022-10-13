import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/records', async (req, res) => {
    const records = await prisma.records.findMany()
    res.json(records)
  })

app.post(`/record`, async (req, res) => {
  const { level, user , userId} = req.body
  const result = await prisma.records.create({
    data: {
      level,
      user,
      userId,
    },
  })
  res.json(result)
})
app.get('/users', async (req, res) => {
    res.json(await prisma.user.findMany())
  })

app.post(`/user`, async (req, res) => {
  const { email, name} = req.body
  const result = await prisma.user.create({
    data: {
      email,
      name
    },
  })
  res.json(result)
})


const server = app.listen(3000, () =>
    console.log(`Server ready at: http://localhost:3000`)
)