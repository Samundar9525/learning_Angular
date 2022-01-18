import { Component, OnInit } from '@angular/core';
var data="hello";
@Component({
  selector: 'app-buttoncheck',
  templateUrl: './buttoncheck.component.html',
  styleUrls: ['./buttoncheck.component.css']
})
export class ButtoncheckComponent implements OnInit {

  myname="";
  valu=0;
  display=18;
  arr=["samundar","Mukesh","sabbir","rishab","ghanshyam"]
  brr=[
    {name:"Samundar",branch:"MCA",Roll:"111"},
    {name:"Mukesh",branch:"MBA",Roll:"222"},
    {name:"Sabbir",branch:"Maths",Roll:"333"},
    {name:"Rishav",branch:"Physics",Roll:"444"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getname(name:string,roll:number){
    alert(`hello ${name} your roll no is ${roll}`)
  }

  setname(name:string){
    this.myname=name;
  }

  cal(p:string){
    if (p==="add"){
      this.valu++
    }
    if(p==="sub"){
      this.valu--
    }

  }

}
