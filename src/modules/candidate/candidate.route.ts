import express from "express"
import { getAllCandidatesHandler, registerCandidateHandler } from "./candidate.controller.js"

const router = express.Router()

// router.get("/:id", getCandidateByIdHandler)
router.get("/", getAllCandidatesHandler)
router.post("/", registerCandidateHandler)

export default router