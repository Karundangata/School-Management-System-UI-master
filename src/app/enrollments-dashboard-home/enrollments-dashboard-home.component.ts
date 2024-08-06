import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEnrollmentDialogComponent } from '../add-enrollment-dialog/add-enrollment-dialog.component';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Enrollment } from '../shared/interfaces/enrollment.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditEnrollmentDialogComponent } from '../edit-enrollment-dialog/edit-enrollment-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-enrollments-dashboard-home',
  templateUrl: './enrollments-dashboard-home.component.html',
  styleUrls: ['./enrollments-dashboard-home.component.scss'],
})
export class EnrollmentsDashboardHomeComponent {
  displayedColumns: string[] = ['student_id', 'class_id', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  dataSource = new MatTableDataSource<Enrollment>();

  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.get_enrollments();
  }

  add_enrollment_dialog() {
    let dialogRef = this.dialog.open(AddEnrollmentDialogComponent, {
      width: '900px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.get_enrollments();
    });
  }

  enrollments: Enrollment[] | undefined;

  get_enrollments() {
    const url = `${this.api.base_uri_api}enrollments`;
    this.http
      .get(url, { withCredentials: true, observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          this.dataSource.data = response.body.enrollments;
          this.dataSource.paginator = this.paginator;
        },
      });
  }

  onPageChange(event: PageEvent) {}

  edit_enrollment(enrollment: Enrollment) {
    let dialogRef = this.dialog.open(EditEnrollmentDialogComponent, {
      width: '900px',
      data: enrollment,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.get_enrollments();
    });
  }

  delete_enrollment(enrollment: Enrollment) {
    const confirmationSnackBar = this.snackBar.open(
      'Confirm DDeletion',
      'Confirm',
      { duration: 7000 }
    );
    confirmationSnackBar.onAction().subscribe(() => {
      const url = `${this.api.base_uri_api}enrollments/${enrollment.id}`;
      this.http
        .delete(url, { withCredentials: true, observe: 'response' })
        .subscribe({
          next: (response: HttpResponse<any>) => {
            if (response.ok) {
              this.get_enrollments();
            }
          },
        });
    });
  }
}
