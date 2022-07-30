"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCandidateHandler = exports.getAllCandidatesHandler = void 0;
const candidate_service_js_1 = require("./candidate.service.js");
function getAllCandidatesHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const candidates = yield (0, candidate_service_js_1.getAllCandidates)();
        if (!candidates) {
            return res.status(400).send("Couldnt get candidates");
        }
        return res.status(200).send(candidates);
    });
}
exports.getAllCandidatesHandler = getAllCandidatesHandler;
function registerCandidateHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstName, lastName, dateOfBirth, phoneNumber, phoneNumberRelationToCandidate, email, emailRelationToCandidate, streetAddress, city, stateAbrv, zipCode, skills, bio } = req.body;
        const candidate = {
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
        };
        try {
            yield (0, candidate_service_js_1.registerCandidate)(candidate);
            return res.status(201);
        }
        catch (e) {
            return res.status(500);
        }
    });
}
exports.registerCandidateHandler = registerCandidateHandler;
