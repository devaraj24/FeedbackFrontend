import { Injectable } from '@angular/core';
import { Feedback } from './feedback';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  // getFeedbackListByDoctor(doctorId: number) {
  //   throw new Error('Method not implemented.');
  // }
  // addFeedback(feedback: Feedback) {
  //   throw new Error('Method not implemented.');
  // }

  private baseURL = 'http://localhost:8082/feedback/';

  // private baseUrl = 'http://localhost:8082/doctors/';

 
  constructor(private httpClient: HttpClient) { 

  }

  addfeedback(feedback: Feedback): Observable<Object> {
  return this.httpClient.post(`${this.baseURL}` + '/saveFeedback', feedback);
  }
 
  getFeedbackList(): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(`${this.baseURL}` + '/fetchAllFeedbacks');
  }


  getFeedbackListByDoctor(doctorId:number):Observable<Feedback[]>{
    return this.httpClient.get<Feedback[]>(`${this.baseURL}`+`getFeedbackListByDoctor/${doctorId}`)
  }
// getFeedbackById(feedbackId:number): Observable<Feedback> {
//   console.log(`${this.baseURL}`+`getById/${feedbackId}`);
//   return this.httpClient.get<Feedback>(`${this.baseURL}`+`getfeedbackbyId/${feedbackId}`)
// }
}

