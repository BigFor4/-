import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Students } from '../models/student';
import { CommonService } from '../Services/common.service';
import { ServerhttpService } from '../Services/serverhttp.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  public id = 0;
  public studentForm = new FormGroup({
    code: new FormControl(''),
    gender: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    picture: new FormControl(''),
  }); 
  constructor(private common: CommonService,
    private serverHttp: ServerhttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id>0)
    {
      this.loadData(this.id);
    }
  }
  private loadData(id: number){
    console.log("id", id)
    this.serverHttp.getStudent(id).subscribe((data)=>{
      console.log("getStudent", data);
      for(const controlName in this.studentForm.controls){
        if(controlName)
        {
          this.studentForm.controls[controlName].setValue(data[controlName]);
        }
      }
    })
  }





  private createData(){
    const  newStudent: any = {};
    for(const controlName in this.studentForm.controls){
      if(controlName)
      {
        newStudent[controlName] = this.studentForm.controls[controlName].value;
      }
    }
    return newStudent as Students
  }
  public saveAndCancel(){
    // console.log('onSubmit');
    // for(const controlName in this.studentForm.controls){
    //   if(controlName){
    //     console.log(
    //       controlName + " = " + this.studentForm.controls[controlName].value
    //     );
    //   }
    // }
    if(this.id === 0){
      this.serverHttp.addStudents(this.createData()).subscribe((data)=>{
        console.log("Student Added",data);
        this.router.navigate(["students"]);
        this.common.increamentStudent();
        this.studentForm.reset();
      });
    }
    else{
      this.serverHttp.modifyStudents(this.id ,this.createData()).subscribe((data)=>{
        console.log("Student Added",data);
        this.router.navigate(["students"]);
        this.studentForm.reset();
      });
    }
  }
  public save(){
    if(this.id === 0){
      this.serverHttp.addStudents(this.createData()).subscribe((data)=>{
        console.log("Student Added",data);
        this.common.increamentStudent();
        this.studentForm.reset();
      });
    }
    else{
      this.serverHttp.modifyStudents(this.id ,this.createData()).subscribe((data)=>{
        console.log("Student Added",data);
        this.studentForm.reset();
        this.loadData(this.id);
      });
    }
  }
  public onCancel(){
    this.router.navigate(['students']);
  }



    public randomStudent() {
    this.serverHttp.getRandomStudent().subscribe((data) => {
      console.log('getRandomStudent', data);
      if (data && data.results && data.results.length > 0) {
        const student:any = data.results[0];
        this.studentForm.controls.code.setValue(
          (student.id.name || '') + '-' + (student.id.value || '')
        );
        this.studentForm.controls.gender.setValue(student.gender);
        this.studentForm.controls.firstname.setValue(student.name.first);
        this.studentForm.controls.lastname.setValue(student.name.last);
        this.studentForm.controls.dob.setValue(student.dob.date);
        this.studentForm.controls.email.setValue(student.email);
        this.studentForm.controls.phone.setValue(student.phone);
        this.studentForm.controls.picture.setValue(student.picture.large);
      }
    });
  }
}
