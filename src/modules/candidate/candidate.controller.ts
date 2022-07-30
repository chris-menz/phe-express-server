import e, { Request, Response } from "express"
import { Candidate } from "./candidate.model.js"
import { getAllCandidates, registerCandidate } from "./candidate.service.js"



export async function getAllCandidatesHandler(req: Request, res: Response) {
    const candidates: Candidate[] = await getAllCandidates()
    if(!candidates){
        return res.status(400).send("Couldnt get candidates")
    }
    return res.status(200).send(candidates)
}

export async function registerCandidateHandler(req: Request, res: Response){
    const { 
        firstName, 
        lastName, 
        dateOfBirth, 
        phoneNumber, 
        phoneNumberRelationToCandidate, 
        email, 
        emailRelationToCandidate, 
        streetAddress, 
        city, 
        stateAbrv,
        zipCode,
        skills,
        bio
    } = req.body

    const candidate: Candidate = {
        firstName,
        lastName,
        dateOfBirth,
        phoneNumber,
        phoneNumberRelationToCandidate,
        email,
        emailRelationToCandidate,
        streetAddress,
        city,
        stateAbrv,
        zipCode,
        skills,
        bio
    }

    try {
        await registerCandidate(candidate)
        return res.status(201)
    } catch (e) {
        return res.status(500)
    }

}