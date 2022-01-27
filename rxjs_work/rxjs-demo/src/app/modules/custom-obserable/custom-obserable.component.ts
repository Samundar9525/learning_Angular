import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';


@Component({
  selector: 'app-custom-obserable',
  templateUrl: './custom-obserable.component.html',
  styleUrls: ['./custom-obserable.component.css']
})
export class CustomObserableComponent implements OnInit {
  names:any;
  stat="Running"
  namestatus='bg-primary';
  techstatus1:any;
  techstatus2:any;
  constructor(private list:MydataService) { }

  ngOnInit(): void {

    const custobserable1 = new Observable(observer => {
      setTimeout(() => {
        observer.next("Angular")
      }, 1000);

      setTimeout(() => {
        observer.next("HTML ")
      }, 2000);
      setTimeout(() => {
        observer.next("CSS")
        observer.error("Aborted Transmission")
      }, 3000);
      setTimeout(() => {
        observer.next("java")
      }, 4000);

      setTimeout(() => {
        observer.next("Python")
        observer.complete();
      }, 5000);
    })

    custobserable1.subscribe({
      next: (res) => {
        // console.log(res);
        this.list.listappend(res,"custelcontainer1");
      },
      error: (err) => {
        // console.error(err);
        this.techstatus1='error'
        this.list.listappend(err,"custelcontainer1");
      },
      complete: () =>{
        // console.info('complete');
        this.techstatus1='complete';
        this.list.listappend("Sucesss transmission","custelcontainer2");
      }

  })




  const custobserable2 = new Observable(observer => {
    setTimeout(() => {
      observer.next("Angular")
    }, 1500);

    setTimeout(() => {
      observer.next("HTML ")
    }, 2500);
    setTimeout(() => {
      observer.next("CSS")
    }, 3500);
    setTimeout(() => {
      observer.next("java")
    }, 4500);

    setTimeout(() => {
      observer.next("Python")
      observer.complete();
    }, 5500);
  })

  custobserable2.subscribe({
    next: (res) => {
      // console.log(res);
      this.list.listappend(res,"custelcontainer2");
    },
    error: (err) => {
      // console.error(err);
      this.techstatus2='error'
    },
    complete: () =>{
      // console.info('complete');
      this.techstatus2='complete'
      this.list.listappend("Sucesss transmission","custelcontainer2");
    }

})



const arr=[ "sam","sabbir","miku","chickoo","tuni","Anjan","Mukesh","Rishab","Ghanshyam","shubham","Abhijeet"];


let custobserable3 =new Observable(observer=>{
let count =0;
setInterval(()=>{
  observer.next(arr[count]);

  if (count>=3){
    //  uncomment to see the badge effect of abort
    // observer.error("Abort");
  }
  if (count>=10){
    observer.complete();
  }
  count++

},1000)

})

custobserable3.subscribe({
  next: (res) => {
    console.log(res);
    this.names=res;
  },
  error: (err) => {
    console.error(err);
    this.namestatus='bg-danger'
    this.stat="Error"

  },
  complete: () =>{
    console.info('complete');
    this.namestatus='bg-success'
    this.stat="Sucess"
  }

})


  }

}
