import { Component, OnInit } from '@angular/core';
import {UserdataService} from "../services/userdata.service"
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  users=[{employee_name:"samundar",employee_salary:50000}];
  dat:any;
  constructor(private userdata:UserdataService) {
    this.fetchdata(userdata);
   }

   fetchdata(userdata:UserdataService){
    userdata.myapi().subscribe((dat)=>{
      console.log(dat);
      this.users=dat.data;
      console.log("transmitted");
      console.log(this.users);

    });
    console.log("fetched");
    console.log(this.users);

   }

  ngOnInit(): void {
  }

}
