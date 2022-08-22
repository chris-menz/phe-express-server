import { connectToMongo,  disconnectFromMongo} from "./mongodb";
import mongoose from "mongoose";
import express from "express";
var connection = connectToMongo();
const candidateScheema = new mongoose.Schema({
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
const employer = undefined;
function set_up_api(app: express.Application) {
    express.json()
    app.route('internal_api/get_db').get( function(req, res, app) {
        res.status(405);
        res.send(`
        <!DOCTYPE HTML>
        <p>You are supposed to use post requests only.</p>
        `);
        return 405;
    }).post(
        function(req,res,app) {
            // parse the data
            /* body format:
            */
        }
    )


    
}