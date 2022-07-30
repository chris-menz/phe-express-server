import { prop, getModelForClass } from "@typegoose/typegoose";
import { stateAbrvs } from "../../utils/stateAbrvs.js";

export class Candidate {
    @prop({required: true})
    public firstName: string

    @prop({required: true})
    public lastName: string

    @prop({required: true})
    public dateOfBirth: string

    @prop({required: true, unique: true})
    public phoneNumber: string

    @prop({required: true, enum: ["Self", "Family member", "Friend", "Other"]})
    public phoneNumberRelationToCandidate: string

    @prop({required: true, unique: true})
    public email: string

    @prop({required: true, enum: ["Self", "Family member", "Friend", "Other"]})
    public emailRelationToCandidate: string

    @prop({required: true})
    public streetAddress: string

    @prop({required: true})
    public city: string

    @prop({required: true, enum: stateAbrvs})
    public stateAbrv: string

    @prop({required: true})
    public zipCode: string

    @prop({required: true})
    public skills: string[]

    @prop({required: true})
    public bio: string
}

export const CandidateModel = getModelForClass(Candidate, {
    schemaOptions: {
        timestamps: true
    }
})