import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-getfeedbackbydocid',
  templateUrl: './getfeedbackbydocid.component.html',
  styleUrls: ['./getfeedbackbydocid.component.css']
})
export class GetfeedbackbydocidComponent implements OnInit {
  

    feedbacks: any ;
   

    doctorId: number =2;
   
    // @ViewChild('id') inputId :any;
    constructor(private feedback:FeedbackService,private router: Router, private route: ActivatedRoute) { }
   
    getFeedbackListByDoctor()
    {
      this.feedback.getFeedbackListByDoctor(this.doctorId).subscribe(data=>this.feedbacks=data)
    }
   
    ngOnInit(): void {
      // this.appointment.getAppointmentListByDoctor(this.doctorId).subscribe(data=>this.appointments=data)
    }
   
  }
   
  