import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  url="https://jsonplaceholder.typicode.com/comments";


  constructor(private http:HttpClient) { }


  myapi():Observable<any>{
    return this.http.get(this.url);
}


}
