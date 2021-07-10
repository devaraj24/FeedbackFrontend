import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css']
})
export class AddfeedbackComponent implements OnInit {

  id:number=0;
  doctorId: number = 0;
  @Input() public parentData:any;

  doctor: Doctor = new Doctor;
  feedback: Feedback = new Feedback();
  patient: Patient = new Patient();
  speciality: string = "";
  // customerError!: Customer;
  // addForm!: NgForm;
  // id: any;
  constructor(private feedbackService: FeedbackService, private patientService: PatientService,private doctorService: DoctorService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {

    
    this.doctorId = this.route.snapshot.params['doctorId'];
    this.doctorService.getDoctorById(this.doctorId).subscribe(data => {
      this.doctor = data; console.log(data);
    }, error => console.log(error));

    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data; console.log(data);
    },
    error => console.log(error));
  }
 
  saveFeedback(){
    console.log(this.speciality);
    this.doctorService.getDoctorSpeciality(this.speciality).subscribe(data=>{console.log(data);this.doctor=data
      this.feedback.patient=this.patient;
      this.feedback.doctor=data;
      console.log(this.feedback.doctor)
      console.log(this.feedback);
      console.log(this.doctor)
      this.feedbackService.addfeedback(this.feedback).subscribe(body=>{console.log(body)},error => console.log(error));
      this.navigateToFeedback();

    },error => console.log(error));
    
    
    console.log(this.doctor)

  
  }

  
  Onsubmit(value: string) {
    this.speciality = value;
    this.saveFeedback();
  }
  navigateToPatients(){
      this.router.navigate(['/patientList']);
    }

    navigateToFeedback() {

      this.router.navigate(['/feedbackList']);
  
    }
  
  
  }
  
  //   saveFeedback(){
  //     this.feedback.patient = this.patient;
  //     console.log(this.feedback);
  //     this.feedbackService.addfeedback(this.feedback).subscribe(data => { console.log(data) }, error => console.log(error));
  //     this.navigateToFeedback();
  //   }

  // navigateToFeedback(){
  //     this.router.navigate(['/feedback']);
  //   }
//}