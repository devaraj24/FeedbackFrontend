import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';
import { FormsModule } from '@angular/forms';
// import { DoctorListComponent } from './doctor-list/doctor-list.component';
// import { ViewfeedbackbydocidComponent } from './viewfeedbackbydocid/viewfeedbackbydocid.component';
// import { GetbyidComponent } from './getfeedbackbyid/getbyid.component';
import { GetfeedbackbyidComponent } from './getfeedbackbyid/getfeedbackbyid.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
import { PatientListComponent } from './patientlist/patientlist.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbacklistComponent,
    AddfeedbackComponent,
    // DoctorListComponent,
    // ViewfeedbackbydocidComponent,
    // GetbyidComponent,
    GetfeedbackbyidComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
