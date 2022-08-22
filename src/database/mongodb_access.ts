import { connectToMongo,  disconnectFromMongo} from "./mongodb";
import mongoose from "mongoose";
import express from "express";
import { CandidateModel } from "../modules/candidate/candidate.model";
const candidateSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    phoneNumber: String,
    phoneNumberRelationToCandidate: String,
    email: String,
    emailRelationToCandidate: String,
    streetAddress: String,
    city: String,
    state_abbr: String,
    zipCode: String,
    skills: String,
    bio: String
})
const employerSchema = new mongoose.Schema({
    Age: Number,
    Gender: String,
    bio: String,
    location: String,
    skills: String
})
const employerModel = new mongoose.Model('employer', employerSchema);
const candidateModel = new mongoose.Model('candidate', candidateSchema);
function err_403(message: String, res: express.Response) {
    res.status(403);
    res.send({error: true, reason: message});
} 
function err_400(message: String, res: express.Response) {
    res.status(400);
    res.send({error: true, reason: message});
}
function verify_t (t: String) {
    // for now
    return true;
}

async function set_up_api(app: express.Application) {
    var connection = await connectToMongo();
    express.json()
    app.route('internal_api/get_db').get( function(req, res, app) {
        res.status(405);
        res.send(`
        <!DOCTYPE HTML>
        <p>You are supposed to use post requests only.</p>
        `);
        return 405;
    }).post(
        async function(req,res,app) {
            // parse the data
            /**  body format:
                verification: object of format {
                    t: string
                }
                employer_data: null if not an employer, otherwise Object of format {
                    bio: string
                    gender: string
                    age: number
                    location: string
                    skills: string
                    id: number
                }
                candidate_data: null if not a candidate, otherwise Object of format {

                }
            */
            var body = req.body;
            if (body.verification === undefined) {
                err_403("you didn't verify", res);
                return -1;
            }
            // body.verification existss
            if (body.verification.t === undefined) {
                err_403("the 't' field was not specified, cannot verify", res);
                return -1;
            }
            if (typeof body.verification.t != "string") {
                err_400("body.verification.t is not a string", res);
                return -1;
            }
            if (!verify_t(body.verification.t)) {
                err_403("you didn't verify successfully", res);
                return -1;
            }
            
            if (body.employer_data != null) {
                var properties = ["bio", "gender", "age", "location", "skills", "id"];
                for (var i = 0; i<properties.length; i++) {
                    if (body.employer_data[properties[i]] == undefined) {
                        err_400("body.employer_data does not contain the property " + properties[i] + "...", res);
                        return -1;
                    }
                    
                }
                employerModel.replaceOne({_id: body.employer_data.id}, {
                    bio: body.employer_data.bio,
                    age: body.employer_data.age,
                    gender: body.employer_data.gender,
                    skills: body.employer_data.skills,
                    location: body.employer_data.location,
                    id: body.employer_data.id
                 });
                 res.status(200);
                 res.send({error: false, reason: "", result: null});
                 return 0;
            }
            else if (body.candidate_data != null) {

                res.status(400);

                res.send({error: true, reason: "wrong route"});
                /*var properties = ["bio", "gender", "age", "location", "skills", "id"];
                for (var i = 0; i<properties.length; i++) {
                    if (body.employer_data[properties[i]] == undefined) {
                        err_400("body.employer_data does not contain the property " + properties[i] + "...", res);
                        return -1;
                    }
                }*/
            }
        }
    )
}