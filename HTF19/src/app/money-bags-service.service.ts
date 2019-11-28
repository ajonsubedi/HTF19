import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyBagsServiceService {

  private APIUrl = 'http://52.157.94.246/moneybags';

  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'apiKey':"IsU5E0Pb7C9urhZAFrKL/RPuf8dnk8j16Lf1F/puKQk="
    })
  };
  

  public getMoneybags(): Observable<object> {
    console.log(this.httpOptions);
    return this.httpClient.get(this.APIUrl,this.httpOptions);
  }
  
}
