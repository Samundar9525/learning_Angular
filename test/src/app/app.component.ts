import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  glob=10;
   brr=[
    {name:"Samundar",branch:"MCA",Roll:"111"},
    {name:"Mukesh",branch:"MBA",Roll:"222"},
    {name:"Sabbir",branch:"Maths",Roll:"333"},
    {name:"Rishav",branch:"Physics",Roll:"444"}
  ]
  title = 'Singh';
  add(data:number){
    console.log("works");
    this.glob=data+1;
  }

}
