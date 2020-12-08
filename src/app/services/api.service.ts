import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  dbData = []

  private apiUrl = "/assets/data.json"

  constructor(private http: HttpClient) {}


  //  this.http.get(this.apiUrl).toPromise().then(data => {
  //   for (let i in data)
  //   if (data.hasOwnProperty(i))
  //   this.dbData.push(data[i]); 
  // })

  //  getData(){
  //   return this.dbData 
  // }

   getData():Observable<any>{
    return this.http.get(this.apiUrl)
  }

}
