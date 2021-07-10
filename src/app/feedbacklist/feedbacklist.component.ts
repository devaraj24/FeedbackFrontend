import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedbacklist',
  templateUrl: './feedbacklist.component.html',
  styleUrls: ['./feedbacklist.component.css']
})
export class FeedbacklistComponent implements OnInit {
  feedbacks!: Feedback[]; 
  // doctors: Doctor[] | undefined;

  constructor(private feedbackservice: FeedbackService,private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }
  private getFeedbacks() {
    this.feedbackservice.getFeedbackList().subscribe(data => { this.feedbacks = data, console.log(data)});
  }
  
  viewFeedbackByDoctorId(doctorId: number) {
    this.doctorService.getDoctorById(doctorId).subscribe(data => {
      console.log(data), this.getFeedbacks();
      this.router.navigate(['getfbbyid/:doctorId',doctorId]);
    },)
  }

}
