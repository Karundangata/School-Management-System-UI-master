import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-teacher-dialog',
  templateUrl: './add-teacher-dialog.component.html',
  styleUrls: ['./add-teacher-dialog.component.scss']
})
export class AddTeacherDialogComponent {
  teacherForm = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    date_of_birth: new FormControl(),
    gender: new FormControl(),
    address: new FormControl(),
    phone_number: new FormControl(),
    qualification: new FormControl()
  });

  constructor(private api: ApiService, private http: HttpClient, private dialogRef: MatDialogRef<AddTeacherDialogComponent>) { }

  add_teacher() {
    const url = `${this.api.base_uri_api}teachers`;
    const formData = this.teacherForm.value;
    this.http.post(url, formData, { withCredentials: true, observe: 'response' }).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          this.dialogRef.close()
        }
      }
    })
  }
}
