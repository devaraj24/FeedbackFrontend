import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() public parentData:any;

  feedback: Feedback = new Feedback();
  patient: Patient = new Patient();
  // customerError!: Customer;
  // addForm!: NgForm;
  // id: any;
  constructor(private feedbackService: FeedbackService, private patientService: PatientService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data; console.log(data);
    },
    error => console.log(error));
  }
 
  onSubmit() {
      // console.log(this.feedback);
      this.saveFeedback();
    }
  navigateToPatients(){
      this.router.navigate(['/patientList']);
    }

    saveFeedback(){
      this.feedback.patient = this.patient;
      console.log(this.feedback);
      this.feedbackService.addfeedback(this.feedback).subscribe(data => { console.log(data) }, error => console.log(error));
      this.navigateToFeedback();
    }

  navigateToFeedback(){
      this.router.navigate(['/feedback']);
    }
}
