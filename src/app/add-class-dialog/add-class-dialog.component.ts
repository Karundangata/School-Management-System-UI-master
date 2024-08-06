import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-class-dialog',
  templateUrl: './add-class-dialog.component.html',
  styleUrls: ['./add-class-dialog.component.scss']
})
export class AddClassDialogComponent {
  classForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl()
  })

  constructor(private dialogRef: MatDialogRef<AddClassDialogComponent>, private api: ApiService, private http: HttpClient) { }

  onSubmit() {
    const formData = this.classForm.value;
    const url = `${this.api.base_uri_api}classes`;
    this.http.post(url, formData, { withCredentials: true, observe: 'response' }).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          this.dialogRef.close();
        }
      }
    })
  }

}
