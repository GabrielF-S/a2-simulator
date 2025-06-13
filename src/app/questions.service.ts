import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './questions/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private jsonUrl = 'questions.json';

  constructor(private http: HttpClient) { }

  getQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(this.jsonUrl);
  }
  
}
