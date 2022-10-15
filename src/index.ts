import app from "./app"
import Connect from './connect'


const PORT = process.env.PORT
const db = process.env.MONGO_URL ?? "mongodb://localhost:27017/test"

Connect({ db })

app.listen(PORT, () =>
    console.log(`Server ready at: http://localhost:${PORT}`)
)