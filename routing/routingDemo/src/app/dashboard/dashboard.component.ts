import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:any;
  constructor(private usrinfo:UserdataService) {
  this.data=usrinfo.userinfo();
  }
  ngOnInit(): void {
  }

}
