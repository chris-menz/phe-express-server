"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateModel = exports.Candidate = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const stateAbrvs_js_1 = require("../../utils/stateAbrvs.js");
class Candidate {
}
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Candidate.prototype, "firstName", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Candidate.prototype, "lastName", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Candidate.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Candidate.prototype, "phoneNumber", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, enum: ["Self", "Family member", "Friend", "Other"] }),
    __metadata("design:type", String)
], Candidate.prototype, "phoneNumberRelationToCandidate", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Candidate.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, enum: ["Self", "Family member", "Friend", "Other"] }),
    __metadata("design:type", String)
], Candidate.prototype, "emailRelationToCandidate", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Candidate.prototype, "streetAddress", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Candidate.prototype, "city", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, enum: stateAbrvs_js_1.stateAbrvs }),
    __metadata("design:type", String)
], Candidate.prototype, "stateAbrv", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Candidate.prototype, "zipCode", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Array)
], Candidate.prototype, "skills", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Candidate.prototype, "bio", void 0);
exports.Candidate = Candidate;
exports.CandidateModel = (0, typegoose_1.getModelForClass)(Candidate, {
    schemaOptions: {
        timestamps: true
    }
});
