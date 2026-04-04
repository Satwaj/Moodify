const express= require(`express`)
const cookieParser = require(`cookie-parser`)
const cors = require(`cors`)
const path = require(`path`)

const app = express()

app.use(express.json())
app.use(cookieParser())
const allowedOrigins = [
  process.env.RENDER_EXTERNAL_URL,
  ...(process.env.CORS_ORIGINS || "").split(","),
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5174"
]
  .map((origin) => origin && origin.trim())
  .filter(Boolean)

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    return callback(new Error("Not allowed by CORS"))
  },
  credentials: true
}))

app.use(express.static(path.join(__dirname, `..`, `public`)))


//Routes
const authRoutes = require(`./routes/auth.routes`)

const songsRoutes = require(`./routes/songs.routes`)

app.use(`/api/auth`,authRoutes)
app.use(`/api/songs`,songsRoutes)

module.exports = app
