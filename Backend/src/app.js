const express= require(`express`)
const cookieParser = require(`cookie-parser`)
const cors = require(`cors`)
const path = require(`path`)

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
  credentials:true
}))

app.use(express.static(path.join(__dirname, `..`, `public`)))


//Routes
const authRoutes = require(`./routes/auth.routes`)

const songsRoutes = require(`./routes/songs.routes`)

app.use(`/api/auth`,authRoutes)
app.use(`/api/songs`,songsRoutes)

module.exports = app
