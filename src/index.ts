import express, { Express, Request, Response } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

// import CandidateRoute from "./modules/candidate/candidate.route"
import { connectToMongo, disconnectFromMongo } from "./database/mongodb"

const app: Express = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the PHE Express Dev Server!!!")
})

// app.use("/candidate", CandidateRoute)

const server = app.listen(3001, async () => {
    await connectToMongo()
    console.log("Express running on port 3001")
})

process.on("SIGINT", async () => {
    server.close(() => {
        console.log("Server shutting down")
        disconnectFromMongo()
        process.exit(0)
    })
})

process.on("SIGTERM", async () => {
    server.close(() => {
        console.log("Server shutting down")
        disconnectFromMongo()
        process.exit(0)
    })
})