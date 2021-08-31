import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name ="";
  public password = "";
  public honeys;
  public selectedhoney = "";
  constructor(private common: CommonService) {
    this.honeys =common.honeys;
   }

  ngOnInit(): void {
  }
  
  public onSubmit(){
    console.log("onSubmit");
    console.log("name = " + this.name)
    console.log("password = " + this.password)
    console.log("selected honey = " + this.honeys)
  }

}
