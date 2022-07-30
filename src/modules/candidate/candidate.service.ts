import { Candidate, CandidateModel } from "./candidate.model.js";

export async function getAllCandidates(){
    console.log(CandidateModel.find().lean())
    return CandidateModel.find().lean()
}

export async function registerCandidate(candidate: Candidate){
    return CandidateModel.create(candidate)
}