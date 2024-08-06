import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Student } from '../shared/interfaces/student.interface';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.scss'],
})
export class EditStudentDialogComponent {
  editStudentForm: FormGroup;
  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public student: Student,
    private fb: FormBuilder,
    private api: ApiService,
    private http: HttpClient,
    private dialogRef: MatDialogRef<EditStudentDialogComponent>
  ) {
    this.editStudentForm = this.fb.group({
      first_name: new FormControl(student.first_name),
      last_name: new FormControl(student.last_name),
      date_of_birth: new FormControl(student.date_of_birth),
      gender: new FormControl(student.gender),
      address: new FormControl(student.address),
      phone_number: new FormControl(student.phone_number),
    });
  }

  edit_student() {
    const url = `${this.api.base_uri_api}students/${this.student.id}`;
    const formData = this.editStudentForm.value;
    this.http
      .put(url, formData, { withCredentials: true, observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          if (response.ok) {
            this.dialogRef.close();
          }
        },
      });
  }
}
