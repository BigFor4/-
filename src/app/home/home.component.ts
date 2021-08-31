import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name;
  public age;
  public honeys;
  constructor(private common: CommonService) { 
    this.age = common.age;
    this.honeys = common.honeys;
    this.name = common.name;
  }

  ngOnInit(): void {
  }
  public tangTuoi(){
    this.common.age++;
    this.age = this.common.age;
    this.common.honeys.push(this.name + ": " + this.age)
  }
}
