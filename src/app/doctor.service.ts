import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { HttpClient } from '@angular/common/http';
//import { AvailabilityDates } from './availabilitydates';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  getByDoctorId(doctorId: number) {
    throw new Error('Method not implemented.');
  }
  private baseURL = 'http://localhost:8082/doctors/';
 
  constructor(private httpClient: HttpClient) {}
 
  getDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}` + '/fetchAllDoctor');
  }

  getDoctorById(doctorId:number): Observable<Doctor> {
    console.log(`${this.baseURL}`+`fetchPatientById/${doctorId}`);
    return this.httpClient.get<Doctor>(`${this.baseURL}`+`/getAllFeedbacks/${doctorId}`)
  }

  getDoctorSpeciality(speciality: string): Observable<Doctor>{
    return this.httpClient.get<Doctor>(`http://localhost:8082/doctors/findBySpeciality/${speciality}`);
  }
 
  // getFeedbackByDoctorId(doctorId: number): Observable<Doctor> {
  //   return this.httpClient.get<Doctor>(`${this.baseURL}` + `/getAllFeedbacks/${doctorId}`);
  // }

  
// getFeedbackByDoctorId(doctorId:number): Observable<Feedback> {
//   console.log(`${this.baseURL}`+`getById/${feedbackId}`);
//   return this.httpClient.get<Feedback>(`${this.baseURL}`+`getfeedbackbyId/${feedbackId}`)
// }
}