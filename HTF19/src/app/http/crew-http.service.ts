import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrewHttpService {
  
  private APIUrl = '52.157.94.246';

  constructor(private httpClient:HttpClient) { }

  public getCrews(): Observable<object> {
    return this.httpClient.get(this.APIUrl);
}
