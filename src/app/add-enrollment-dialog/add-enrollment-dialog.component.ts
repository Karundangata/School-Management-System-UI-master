import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from '../shared/interfaces/student.interface';
import { Class } from '../shared/interfaces/class.interface';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Enrollment } from '../shared/interfaces/enrollment.interface';

@Component({
  selector: 'app-add-enrollment-dialog',
  templateUrl: './add-enrollment-dialog.component.html',
  styleUrls: ['./add-enrollment-dialog.component.scss']
})
export class AddEnrollmentDialogComponent {
  enrollment_form = new FormGroup({
    student_id: new FormControl(),
    class_id: new FormControl()
  });

  constructor(private api: ApiService, private http: HttpClient, private dialogRef: MatDialogRef<AddStudentDialogComponent>) {
    this.get_students();
    this.get_classes();
  }

  add_enrollment() {
    const url = `${this.api.base_uri_api}enrollments`;
    const formData = this.enrollment_form.value;
    this.http.post(url, formData, { withCredentials: true, observe: 'response' }).subscribe({
      next: (response: HttpResponse<any>) => {
        this.dialogRef.close();
      }
    })
  }

  students: Student[] | undefined

  get_students() {
    const url = `${this.api.base_uri_api}students`
    this.http.get(url, { withCredentials: true, observe: 'response' }).subscribe(
      {
        next: (response: HttpResponse<any>) => {
          if (response.ok) {
            this.students = response.body.students
            console.log("Students", this.students)
          }
        }
      }
    )
  }


  classes: Class[] | undefined
  get_classes() {
    const url = `${this.api.base_uri_api}classes`;
    this.http.get(url, { withCredentials: true, observe: 'response' }).subscribe({
      next: (response: HttpResponse<any>) => {
        this.classes = response.body.classes
        console.log("Classes : ", this.classes)
      }
    })
  }



}
