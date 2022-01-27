import { Component, OnInit } from '@angular/core';

import { from, interval, map, Subscription } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  sub1=Subscription;
  sub2=Subscription;
  sub3=Subscription;
  temp:any;

  constructor(private list:MydataService) { }

  ngOnInit(): void {

    // example 01
    const custobserable123 = interval(100);
    const sub1=custobserable123.pipe(
      map(x => x*10)
    ).subscribe(res=>{
      console.log(res/10,res);
      // this.temp=[res/10,res]
      var t= `Data : ${res/10} ==> ${res}`
      this.list.listappend(t,'elcontainer123')
      if (res>=70){
        sub1.unsubscribe();
      }

    })


    const employee=from([
      {fname:"samundar",lname:"singh",age:26,phone:111111},
      {fname:"mukesh",lname:"patel",age:23,phone:22222222},
      {fname:"anjan",lname:"kumar",age:24,phone:333333333},
      {fname:"ghanshyam",lname:"jha",age:22,phone:4444444},
      {fname:"rishav",lname:"kashyap",age:21,phone:555555},
      {fname:"shabbir",lname:"Alam",age:22,phone:99999999},
      {fname:"rohan",lname:"singh",age:21,phone:888888888},
    ])

    var sub2=employee.subscribe(res=>{
    var t= JSON.stringify(res);
    console.log(t)
    this.list.listappend(t,'elcontain223')
    })

    var sub3=employee.pipe(
      map(data=>[data.fname,data.lname])
    ).subscribe(res=>{
    var t=`fullName : ${res[0]} ${res[1]}`
    this.list.listappend(t,'elcontain224')
    })





  }

}
