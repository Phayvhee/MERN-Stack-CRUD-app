import express from 'express'
import mongoose from 'mongoose'
// import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import route from './routes/userRouter.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const PORT = process.env.PORT
const MONGOURL = process.env.MONGO_URL

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log('DB conncted successfully!')
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    })
    .catch((error) => console.log(error))

app.use('/api', route)
