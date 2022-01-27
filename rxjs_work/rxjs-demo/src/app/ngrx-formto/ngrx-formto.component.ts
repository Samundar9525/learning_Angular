import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-ngrx-formto',
  templateUrl: './ngrx-formto.component.html',
  styleUrls: ['./ngrx-formto.component.css']
})
export class NgrxFormtoComponent implements OnInit, AfterViewInit {

  @ViewChild("addbtn") addbtn:any;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count=0;
    fromEvent(this.addbtn.nativeElement,'click').subscribe(res=>{console.log(res)
      let temp="inastance  - "+count++
      this.listappend(temp);

    });

  }

  listappend(valu:string){
    let el=document.createElement('li');
    el.innerText=valu;

    document.getElementById('elcontainer')?.appendChild(el);
    console.log("appended");

  }


}
