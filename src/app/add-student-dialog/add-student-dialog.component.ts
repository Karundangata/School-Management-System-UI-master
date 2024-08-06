import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent {
  studentForm = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    date_of_birth: new FormControl(),
    gender: new FormControl(),
    address: new FormControl(),
    phone_number: new FormControl()
  });

  constructor(private http: HttpClient, private api: ApiService, private dialogRef: MatDialogRef<AddStudentDialogComponent>, private fb: FormBuilder) { }

  onSubmit() {
    const formData = this.studentForm.value;
    const url = `${this.api.base_uri_api}students`;
    this.http.post(url, formData, { withCredentials: true, observe: 'response' }).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          console.log(response.body)
          this.dialogRef.close();
        }
      }
    })
  }
}
