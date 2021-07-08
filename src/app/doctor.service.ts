import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { HttpClient } from '@angular/common/http';
//import { AvailabilityDates } from './availabilitydates';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  getFeedbackByDoctorId(doctorId: number) {
    throw new Error('Method not implemented.');
  }
  private baseURL = 'http://localhost:8082/Doctors/';
 
  constructor(private httpClient: HttpClient) {}
 
  getDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}` + '/fetchAllDoctor');
  }
 
}