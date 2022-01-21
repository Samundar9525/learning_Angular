import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  usrdata: any;
  constructor(private list: MydataService) { }

  ngOnInit(): void {

    // Of
    const obs1 = of("sam", "sabbir", "miku")

    obs1.subscribe(res => {
      console.log(res);
      this.list.listappend(res, "elcontainer1");
    })
    // Of - object
    const obs2 = of({ a: "anjan", b: "rishab", c: "vishal" })
    obs2.subscribe(res => {
      console.log(res);
      this.usrdata = res
    })

    // from - Array
    const obs3 = from(["tony", "peter", "kabir"])

    obs3.subscribe(res => {
      console.log(res);
      this.list.listappend(res, "elcontainer3");
    })

    // from  promise

    const promise = new Promise(resolve => {
      setTimeout(() => {
        let arr = ["thor", "captain", "antman"]
        for (let i = 0; i < 3; i++) {
          this.list.listappend(arr[i], "elcontainer4");
        }
        resolve("promise Resolved");
      }, 3000)
    })

    promise.then(res => {
      console.log(res);
    })
    const obs4 = from(promise)
    obs4.subscribe(res => {
      console.log(res);
    })


    // String data
    const obs5 = from("Samundar")

    obs5.subscribe(res => {
      console.log(res);
      this.list.listappend(res, "elcontainer5");
    })


  }

}
