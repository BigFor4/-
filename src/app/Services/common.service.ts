import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public age = 15;
  public name = "Hương";
  public honeys = ["Hương","Anh","Yêu Em!"];
  public totalStudents = 0;
  public totalStudents$ = new BehaviorSubject<number>(0);
  constructor() { }
  public tangTuoi(){
    this.age++;
    this.honeys.push(this.name + ": " + this.age);
  }

  public setTotalStudents(total: number) {
    this.totalStudents = total;
    this.totalStudents$.next(total);
  }

  public increamentStudent() {
    this.setTotalStudents(this.totalStudents)
    this.totalStudents++;
    this.totalStudents$.next(this.totalStudents);
  }
}
