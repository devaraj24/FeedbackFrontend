import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-getfeedbackbyid',
  templateUrl: './getfeedbackbyid.component.html',
  styleUrls: ['./getfeedbackbyid.component.css']
})
export class GetfeedbackbyidComponent implements OnInit {
    feedback : Feedback[] | any;
    patient : Patient = new Patient();
    feedbackerror:Feedback[] | any;
    feedId: number = 0;
    @ViewChild('id') inputId :any;
    constructor(private feedbackService: FeedbackService, private router: Router, private route: ActivatedRoute) { }
    ngOnInit(): void {
      
    }
    getFeedback(value:any){
    
      this.feedId=value;
      this.feedbackService.getFeedbackById(this.feedId).subscribe(data => {  this.feedback = data;console.log(data);},
        error =>{
          this.feedbackerror = error.error;
         console.log(this.feedbackerror)
        });

        }
      // this.inputId.nativeElement.value="";
      
    }
   

