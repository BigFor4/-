import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:"", component: RouterModule},
  {path:"reactive-form" , component: ReactiveFormComponent},
  {path:"home", component: HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"student-form/:id", component: StudentFormComponent},
  {path:"students", component: StudentsComponent},
  {path:"dashboard",component: DashboardComponent},
  {path:"form" , component: FormComponent},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
