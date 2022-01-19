import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  // brr:any;
  constructor(private http:HttpClient) { }
  url="http://dummy.restapiexample.com/api/v1/employees";
  userinfo(){
    var brr=[
      {name:"Samundar",branch:"MCA",Roll:"111"},
      {name:"Mukesh",branch:"MBA",Roll:"222"},
      {name:"Sabbir",branch:"Maths",Roll:"333"},
      {name:"Rishav",branch:"Physics",Roll:"444"}
    ];
    return brr
  }

  myapi():Observable<any>{
      return this.http.get(this.url);
  }



}
