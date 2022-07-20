import express, {Express, Request, Response} from "express"

const app: Express = express()

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the PHE Express Dev Server")
})

app.listen(8080, () => {
    console.log("Express running on port 8080")
})