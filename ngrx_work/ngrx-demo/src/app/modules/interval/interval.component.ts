import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  temp!: Subscription;
  obsmsg="";
  constructor(private listgenerate:MydataService) { }

  ngOnInit(): void {

    const broadcastvideo=interval(1000);
    // const broadcastvideo=timer(5000,100)

    this.temp=broadcastvideo.subscribe(res=>{
        console.log(res)
        this.obsmsg="Instance - "+res;
        this.listgenerate.listappend(this.obsmsg,"elcontainer1");
        this.listgenerate.listappend(this.obsmsg,"elcontainer2");
        this.listgenerate.listappend(this.obsmsg,"elcontainer3");
        if (res>10){
          this.temp.unsubscribe()
        }
    })
  }
}
