import app from "./app"
import Connect from './connect'

//Cors Configuration - Start
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested, Content-Type, Accept Authorization"
    )
    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "POST, PUT, PATCH, GET, DELETE"
        )
        return res.status(200).json({})
    }
    next()
})
  //Cors Configuration - End


const PORT = process.env.PORT
const db = process.env.MONGODB_URL ?? process.env.MONGO_URL ?? "mongodb://localhost:27017/test"

Connect({ db })

app.listen(PORT, () =>
    console.log(`Server ready at: http://localhost:${PORT}`)
)