import express, { Express, Request, Response } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app: Express = express()

app.use(cookieParser())
app.use(express.json())
app.use(cookieParser)

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the PHE Express Dev Server!!!")
})

const server = app.listen(3001, () => {
    console.log("Express running on port 3001")
})

process.on("SIGINT", () => {
    server.close(() => {
        console.log("Server shutting down")
        process.exit(0)
    })
})

process.on("SIGTERM", () => {
    server.close(() => {
        console.log("Server shutting down")
        process.exit(0)
    })
})