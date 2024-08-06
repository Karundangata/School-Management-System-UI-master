import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDashboardHomeComponent } from './student-dashboard-home/student-dashboard-home.component';
import { AddStudentDialogComponent } from './add-student-dialog/add-student-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { XsrfInterceptor } from './xsrf-interceptor.interceptor';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherDashboardHomeComponent } from './teacher-dashboard-home/teacher-dashboard-home.component';
import { AddTeacherDialogComponent } from './add-teacher-dialog/add-teacher-dialog.component';
import { ClassesDashboardComponent } from './classes-dashboard/classes-dashboard.component';
import { ClassesDashboardHomeComponent } from './classes-dashboard-home/classes-dashboard-home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AddClassDialogComponent } from './add-class-dialog/add-class-dialog.component';
import { EnrollmentsDashboardComponent } from './enrollments-dashboard/enrollments-dashboard.component';
import { EnrollmentsDashboardHomeComponent } from './enrollments-dashboard-home/enrollments-dashboard-home.component';
import { AddEnrollmentDialogComponent } from './add-enrollment-dialog/add-enrollment-dialog.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';
import { EditTeacherDialogComponent } from './edit-teacher-dialog/edit-teacher-dialog.component';
import { EditClassDialogComponent } from './edit-class-dialog/edit-class-dialog.component';
import { EditEnrollmentDialogComponent } from './edit-enrollment-dialog/edit-enrollment-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentDashboardComponent,
    StudentDashboardHomeComponent,
    AddStudentDialogComponent,
    TeacherDashboardComponent,
    TeacherDashboardHomeComponent,
    AddTeacherDialogComponent,
    ClassesDashboardComponent,
    ClassesDashboardHomeComponent,
    ToolbarComponent,
    AddClassDialogComponent,
    EnrollmentsDashboardComponent,
    EnrollmentsDashboardHomeComponent,
    AddEnrollmentDialogComponent,
    LoginComponent,
    SignUpComponent,
    EditStudentDialogComponent,
    EditTeacherDialogComponent,
    EditClassDialogComponent,
    EditEnrollmentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: XsrfInterceptor,
    multi: true,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
