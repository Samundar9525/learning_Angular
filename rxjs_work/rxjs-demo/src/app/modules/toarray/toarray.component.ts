import { Component, OnInit } from '@angular/core';
import { interval, of, Subscription, take, toArray } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.css']
})
export class ToarrayComponent implements OnInit {
  subs!:Subscription;
  subsc!:Subscription;
  tag="0";
  constructor(private list: MydataService) { }

  ngOnInit(): void {

    const obs1 = of("sam", "mukesh", "piku")
      obs1.subscribe(res => {
        console.log(res)
        this.list.listappend(res, 'elcontainer1')
      })

    const obs2 = of("sam", "mukesh", "piku")
    obs2.pipe(toArray()).subscribe(res => {
      this.list.listappend(`[${res}]`, 'elcontainer2')
    })

    const obs4 =interval(100)
    this.subs=obs4.subscribe(res=>{
      this.tag+=`${res} ,`;
      if (res>38){
        this.subs.unsubscribe()
      }

    })

    const obs3 =interval(100)
    this.subsc=obs3.pipe(take(40) ,toArray()).subscribe(res=>{
      console.log(res);
      this.list.listappend(`[${res}]`, 'elcontainer3')
    })






  }

}
