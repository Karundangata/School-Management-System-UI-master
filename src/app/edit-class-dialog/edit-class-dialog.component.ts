import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Class } from '../shared/interfaces/class.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-class-dialog',
  templateUrl: './edit-class-dialog.component.html',
  styleUrls: ['./edit-class-dialog.component.scss'],
})
export class EditClassDialogComponent {
  editClassForm: FormGroup;
  constructor(
    private api: ApiService,
    private http: HttpClient,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public school_class: Class,
    private dialogRef: MatDialogRef<EditClassDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.editClassForm = this.fb.group({
      name: new FormControl(school_class.name),
      description: new FormControl(school_class.description),
    });
  }

  edit_class() {
    const url = `${this.api.base_uri_api}classes/${this.school_class.id}`;
    const formData = this.editClassForm.value;
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
