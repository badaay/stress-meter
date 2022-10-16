import app from "./app"
import Connect from './connect'
import cors from 'cors'

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
};

app.use(cors(options));


const PORT = process.env.PORT
const db = process.env.MONGODB_URL ?? process.env.MONGO_URL ?? "mongodb://localhost:27017/test"

Connect({ db })

app.listen(PORT, () =>
    console.log(`Server ready at: http://localhost:${PORT}`)
)