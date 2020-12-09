import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = "/assets/data.json"

  constructor(private http: HttpClient) {}

   getData():Observable<any>{
    return this.http.get(this.apiUrl)
  }

}
