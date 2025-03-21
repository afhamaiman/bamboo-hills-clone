import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/general.json';

  constructor(private http: HttpClient) {}

  getGeneralData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
