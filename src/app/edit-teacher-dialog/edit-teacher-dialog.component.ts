import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Teacher } from '../shared/interfaces/teacher.interface';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-teacher-dialog',
  templateUrl: './edit-teacher-dialog.component.html',
  styleUrls: ['./edit-teacher-dialog.component.scss'],
})
export class EditTeacherDialogComponent {
  teacherForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public teacher: Teacher,
    private api: ApiService,
    private http: HttpClient,
    private dialogRef: MatDialogRef<EditTeacherDialogComponent>,
    private fb: FormBuilder
  ) {
    this.teacherForm = this.fb.group({
      first_name: new FormControl(teacher.first_name),
      last_name: new FormControl(teacher.last_name),
      date_of_birth: new FormControl(teacher.date_of_birth),
      gender: new FormControl(teacher.gender),
      address: new FormControl(teacher.address),
      phone_number: new FormControl(teacher.phone_number),
      qualification: new FormControl(teacher.qualification),
    });
  }

  edit_teacher() {
    const url = `${this.api.base_uri_api}teachers/${this.teacher.id}`;
    const formData = this.teacherForm.value;
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
