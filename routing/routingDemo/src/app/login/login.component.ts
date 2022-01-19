import { Component, OnInit } from '@angular/core';
import { UserdataService } from "../services/userdata.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  data:any;
  constructor(private usrinfo:UserdataService) {
  this.data=usrinfo.userinfo();
  }

  ngOnInit(): void {
  }

}
