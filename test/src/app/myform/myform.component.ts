import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  myname:any;
  @ Input() item=0;
  @ Input() detail:any;
  @ Output() addfun=new EventEmitter<number>();
  arr=[9,5,6,7,2,4,1]
  userdata:any={};
  showdata=false;
  constructor() { }

  ngOnInit(): void {
  }

  getData(data:any){
    this.userdata=data;
  }
 show(){
    this.showdata=!this.showdata
 }
}
