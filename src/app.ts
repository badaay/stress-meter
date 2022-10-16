import express, { Application, Request, Response, NextFunction } from 'express'
import "dotenv/config"
import bodyParser from 'body-parser'

import UserController from './Controllers/User.controller'
import Records from './Controllers/records.controller'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req: Request, res: Response) => {
  res.send("TS App is Running")
})

app.post("/user", async (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  const { name, email} = req.body
  const user = await UserController.CreateUser({
    name: name,
    email: email,
  })
  return res.send({ user })
})
app.get("/users", async (req: Request, res: Response) => {
  const user = await UserController.ListUser()
  return res.send({ user })
})
app.get('/records', async (req, res) => {
  const records = await Records.index()
  return res.send(records)
})

app.post(`/record`, async (req, res) => {
  const { level, user , userId} = req.body
  const result = await Records.Create({
    level: level,
    user: user,
    userId: userId,
  })
  return res.send({ result })
})


export default app