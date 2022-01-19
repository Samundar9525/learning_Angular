import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  // brr:any;
  constructor() { }

  userinfo(){
    var brr=[
      {name:"Samundar",branch:"MCA",Roll:"111"},
      {name:"Mukesh",branch:"MBA",Roll:"222"},
      {name:"Sabbir",branch:"Maths",Roll:"333"},
      {name:"Rishav",branch:"Physics",Roll:"444"}
    ];
    return brr

  }
}
