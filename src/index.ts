import express, { Application } from "express"
import dotenv from "dotenv"
import router from "./routes"
import { ErrorHandlerMiddleware } from "@middlewares"
dotenv.config()
const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.use("/*", ErrorHandlerMiddleware.ErrorHandlerMiddleware)
// server run
const port = process.env.SERVER_PORT
app.listen(port, () => {
    console.log(`Server run: http://localhost:${port}`)

})