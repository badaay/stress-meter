// import { Prisma, PrismaClient } from '@prisma/client'
import express, { Application, Request, Response, NextFunction } from 'express'
import "dotenv/config"
import bodyParser from 'body-parser'
import Routes from './Routes'
import Connect from './connect'


// const prisma = new PrismaClient()
const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req: Request, res: Response) => {
  res.send("TS App is Running")
})
// app.get('/records', async (req, res) => {
//     const records = await prisma.records.findMany()
//     res.json(records)
//   })

// app.post(`/record`, async (req, res) => {
//   const { level, user , userId} = req.body
//   const result = await prisma.records.create({
//     data: {
//       level,
//       user,
//       userId,
//     },
//   })
//   res.json(result)
// })
// app.get('/users', async (req, res) => {
//     res.json(await prisma.user.findMany())
//   })

// app.post(`/user`, async (req, res) => {
//   const result = await UserController.CreateUser({
//     email:req.body.email,
//     name: req.body.name
//   })
//   res.json(result)
// })


const PORT = process.env.PORT
const db = process.env.MONGO_URL ?? "mongodb://localhost:27017/test"

Connect({ db })
Routes({ app })


app.listen(PORT, () =>
    console.log(`Server ready at: http://localhost:${PORT}`)
)