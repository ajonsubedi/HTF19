import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrewHttpService {
  

  private APIUrl = 'http://52.157.94.246/crew';

  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'apiKey':"IsU5E0Pb7C9urhZAFrKL/RPuf8dnk8j16Lf1F/puKQk="
    })
  };
  

  public getCrews(): Observable<object> {
    console.log(this.httpOptions);
    return this.httpClient.get(this.APIUrl,this.httpOptions);
  }

  public 


  public postCrew(name,x,y) {
    return this.httpClient.post(this.APIUrl,{
      "name":name,
      "x":x,
      "y":y
    },this.httpOptions).subscribe(
      val => {
        console.log("Post call successful value returned in body", val);
      },
      error => {
        console.log("Post call in error", error);
      },
      () => {
        console.log("The Post observable is now completed.");
      }
    );
  }

}
