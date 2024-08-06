import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTeacherDialogComponent } from '../add-teacher-dialog/add-teacher-dialog.component';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import {
  Teacher,
  TeachersResponse,
} from '../shared/interfaces/teacher.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditTeacherDialogComponent } from '../edit-teacher-dialog/edit-teacher-dialog.component';

@Component({
  selector: 'app-teacher-dashboard-home',
  templateUrl: './teacher-dashboard-home.component.html',
  styleUrls: ['./teacher-dashboard-home.component.scss'],
})
export class TeacherDashboardHomeComponent {
  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.get_teachers();
  }

  add_teacher() {
    let dialogRef = this.dialog.open(AddTeacherDialogComponent, {
      width: '900px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.get_teachers();
    });
  }

  dataSource = new MatTableDataSource<Teacher>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  teachers: TeachersResponse = { data: [] };
  displayedColumns: string[] = [
    'first_name',
    'last_name',
    'date_of_birth',
    'gender',
    'address',
    'phone_number',
    'qualification',
    'actions',
  ];

  get_teachers() {
    const url = `${this.api.base_uri_api}teachers`;
    this.http
      .get(url, { withCredentials: true, observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          this.dataSource.data = response.body.teachers;
          this.dataSource.paginator = this.paginator;
        },
      });
  }

  onPageChange(event: PageEvent) {}

  edit_teacher(teacher: Teacher) {
    let dialogRef = this.dialog.open(EditTeacherDialogComponent, {
      width: '900px',
      data: teacher,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.get_teachers();
    });
  }

  delete_teacher(teacher: Teacher) {
    const confirmationSnackBar = this.snackBar.open(
      'Confirm Deletion',
      'Confirm',
      { duration: 7000 }
    );
    confirmationSnackBar.onAction().subscribe(() => {
      const url = `${this.api.base_uri_api}teachers/${teacher.id}`;
      this.http
        .delete(url, { withCredentials: true, observe: 'response' })
        .subscribe({
          next: (response: HttpResponse<any>) => {
            if (response.ok) {
              this.get_teachers();
            }
          },
        });
    });
  }
}
