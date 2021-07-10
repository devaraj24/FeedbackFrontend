import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
//mport { AddfeedbackComponent } from './addfeedback/addfeedback.component';
//import { DoctorListComponent } from './doctor-list/doctor-list.component';
//import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
//import { GetFeedbackByDoctorIdComponent } from './get-feedback-by-doctor-id/get-feedback-by-doctor-id.component';
//import { GetallFeedbacksComponent } from './getallfeedbacks/getall-feedbacks.component';
import { Feedback } from './feedback';
import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';
import { GetfeedbackbydocidComponent } from './getfeedbackbydocid/getfeedbackbydocid.component';
import { PatientListComponent } from './patientlist/patientlist.component';
//import { ViewfeedbackbydocidComponent } from './viewfeedbackbydocid/viewfeedbackbydocid.component';
const routes: Routes = [

  { path: 'feedback', component: FeedbacklistComponent },
  { path: '', redirectTo: 'feedback', pathMatch: 'full' },
  { path: 'addfeedback/:id',component:AddfeedbackComponent },
  {path:'getFeedbackListByDoctorId',component:GetfeedbackbydocidComponent},
 { path:'patientList',component:PatientListComponent},
 
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
