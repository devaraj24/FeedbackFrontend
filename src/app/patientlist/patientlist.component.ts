import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[] | undefined;


  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }
  private getPatients() {
    this.patientService.getPatientList().subscribe(data => { this.patients = data, console.log(data) });
  }
}
