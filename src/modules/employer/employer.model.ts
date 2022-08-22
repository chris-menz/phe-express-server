import { prop, getModelForClass } from "@typegoose/typegoose";
import { stateAbrvs } from "../../utils/stateAbrvs.js";
export class EmployerModel {
    @prop({required: true})
    public Age: number
    
    @prop({required:true})
    public Gender: string

    @prop({required: true})
    public bio: String

    @prop({required: true})
    public bio: string

    @prop({required: true})
    public 

}