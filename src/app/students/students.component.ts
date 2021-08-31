import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../Services/common.service';
import { ServerhttpService } from '../Services/serverhttp.service';
import * as _ from 'lodash';
import * as moment from 'moment';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: any;
  constructor(private common: CommonService,
    private serverHttp: ServerhttpService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.loadData();
  
  }
  private loadData(){
    this.serverHttp.getStudents().subscribe((data) => {
      console.log('getStudents', data);
      this.students = data;
      this.common.setTotalStudents(data.length);
    });
  }
  public addStudents(){
    this.router.navigate(['student-form' ,0]);
  }
  public deleteStudent(studentID: number){
    this.serverHttp.deleteStudents(studentID).subscribe((data)=>{
      console.log("delete", data)
      this.loadData();
    });
  }
  public editStudent(studentID: number){
    this.router.navigate(['student-form' ,studentID]);
  }


  public sortCodeStudent(dir : string){
    if(dir === 'up'){
      this.students = _.orderBy(this.students, ['code'] , ['asc']);
    }
    else{
      this.students = _.orderBy(this.students, ['code'],['desc']);
    }
  }
}
