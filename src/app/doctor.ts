//import { Appointment } from "./appointment";
import { Feedback } from "./feedback";

export class Doctor {
    doctorId: number =0;
    doctorName: string | undefined; 
    speciality: string | undefined;
    hospitalName: string | undefined; 
    email: string | undefined;
    location:string | undefined;
    mobileNo: string | undefined;
    password:string | undefined;
    chargedPerVisit:number | undefined;
    //appointments:Appointment[]=[];
    //feedbacks:Feedback[]=[];
}