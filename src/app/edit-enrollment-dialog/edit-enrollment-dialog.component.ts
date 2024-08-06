import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Enrollment } from '../shared/interfaces/enrollment.interface';

@Component({
  selector: 'app-edit-enrollment-dialog',
  templateUrl: './edit-enrollment-dialog.component.html',
  styleUrls: ['./edit-enrollment-dialog.component.scss'],
})
export class EditEnrollmentDialogComponent {
  editEnrollmentForm: FormGroup;
  constructor(
    private api: ApiService,
    private http: HttpClient,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public enrollment: Enrollment,
    private dialogRef: MatDialogRef<EditEnrollmentDialogComponent>
  ) {
    this.editEnrollmentForm = new FormGroup({
      student_id: new FormControl(enrollment.student_id),
      class_id: new FormControl(enrollment.class_id),
    });
  }

  edit_enrollment() {
    const url = `${this.api.base_uri_api}enrollments/${this.enrollment.id}`;
    const formData = this.editEnrollmentForm.value;
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
