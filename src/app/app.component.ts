import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   private a : number = 2;
   private b : number = 5;

   add(){
     alert("The sum is " + (this.a+this.b));
   }


}

