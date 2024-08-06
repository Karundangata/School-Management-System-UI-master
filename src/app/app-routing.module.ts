import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDashboardHomeComponent } from './student-dashboard-home/student-dashboard-home.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherDashboardHomeComponent } from './teacher-dashboard-home/teacher-dashboard-home.component';
import { ClassesDashboardComponent } from './classes-dashboard/classes-dashboard.component';
import { ClassesDashboardHomeComponent } from './classes-dashboard-home/classes-dashboard-home.component';
import { EnrollmentsDashboardComponent } from './enrollments-dashboard/enrollments-dashboard.component';
import { EnrollmentsDashboardHomeComponent } from './enrollments-dashboard-home/enrollments-dashboard-home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },

  { path: 'dashboard', component: DashboardComponent },

  {
    path: 'student-dashboard', component: StudentDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home', component: StudentDashboardHomeComponent,
      },
    ],
  },
  {
    path: 'teacher-dashboard', component: TeacherDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home', component: TeacherDashboardHomeComponent,
      }
    ]
  },
  {
    path: 'classes-dashboard', component: ClassesDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: ClassesDashboardHomeComponent }
    ]
  },
  {
    path: 'enrollments-dashboard', component: EnrollmentsDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: EnrollmentsDashboardHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
