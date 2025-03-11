import bodyParser from "body-parser"
import cors from "cors"
import "dotenv/config"
import express from "express"
import http from "http"
import application from "./config/application"
import router from "./router"
const app = express()
const httpServer = http.createServer(app)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, _, next) => {
  req.meta = {
    date: new Date(),
    method: req.method,
    start: new Date().getMilliseconds()
  }

  next()
})

app.use("/", router)

httpServer.listen(application.port, async () => {
  let finalHost =
    application.env === "dev"
      ? `${application.host}:${application.port}`
      : `${application.host}`

  console.log(`Api ${application.name} running on: ${finalHost}`)
})
