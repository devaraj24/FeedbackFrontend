import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl="http://localhost:8082/patients/"

  constructor(private http:HttpClient) { }

  getPatientById(id:number): Observable<Patient> {
    console.log(`${this.baseUrl}`+`fetchPatientById/${id}`);
    return this.http.get<Patient>(`${this.baseUrl}`+`fetchPatientById/${id}`)
  }

  
  getPatientList(): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}`+`fetchAllPatients`);
    
    //return this.http.get<Patient[]>(`${this.baseUrl}`+'fetchAllPatients');
  }
}
