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
exports.registerCandidate = exports.getAllCandidates = void 0;
const candidate_model_js_1 = require("./candidate.model.js");
function getAllCandidates() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(candidate_model_js_1.CandidateModel.find().lean());
        return candidate_model_js_1.CandidateModel.find().lean();
    });
}
exports.getAllCandidates = getAllCandidates;
function registerCandidate(candidate) {
    return __awaiter(this, void 0, void 0, function* () {
        return candidate_model_js_1.CandidateModel.create(candidate);
    });
}
exports.registerCandidate = registerCandidate;
