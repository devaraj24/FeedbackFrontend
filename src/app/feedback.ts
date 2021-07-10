//import * as internal from "stream";

import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Feedback {
    feedbackId: number =0;
    rating:number | undefined;
    feedbackComment:String | undefined;
    patient:Patient =new Patient;
    doctor: Doctor= new Doctor();

}

export interface IFeedback
{
    feedbackId: number;
    rating:number;
    feedbackComment:String;
    patient:Patient;
    doctor:Doctor;
}
