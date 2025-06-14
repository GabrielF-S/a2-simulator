import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
  private jsonUrl = 'conteudo.json';
  constructor(private http: HttpClient) { }

  getConteudo(): Observable<any> {
    return this.http.get(this.jsonUrl)
  }
}
