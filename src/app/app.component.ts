import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    public firstName: '';
    public age: '';
    public add: '';
    public phone: '';


    public Submitdata(formValue: NgForm)
     {

           console.log(formValue.value)
     }

  

   
 
}
