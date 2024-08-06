import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {
  Student,
  StudentsResponse,
} from '../shared/interfaces/student.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { EditStudentDialogComponent } from '../edit-student-dialog/edit-student-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-dashboard-home',
  templateUrl: './student-dashboard-home.component.html',
  styleUrls: ['./student-dashboard-home.component.scss'],
})
export class StudentDashboardHomeComponent {
  displayedColumns: string[] = [
    'student_id',
    'first_name',
    'last_name',
    'date_of_birth',
    'gender',
    'address',
    'phone_number',
    'actions',
  ];
  dataSource = new MatTableDataSource<Student>();
  //view child decorator is used to get reference to a child element
  //@ViewChild(MatPaginator) - tells angular to look for MatPaginator directive inside the template
  //paginator:MatPaginator - :MatPaginator is the property name
  //! - non-null assertion operator. tells typescript compiler that a particular variable will not be null or undefined
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  students: StudentsResponse = { data: [] };

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) {
    this.get_students();
  }

  addStudent() {
    let dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '900px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.get_students();
    });
  }

  edit_student(student: Student) {
    let dialogRef = this.dialog.open(EditStudentDialogComponent, {
      width: '900px',
      data: student,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.get_students();
    });
  }

  get_students() {
    const url = `${this.api.base_uri_api}students`;
    this.http
      .get(url, { withCredentials: true, observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          if (response.ok) {
            this.dataSource.data = response.body.students;
            this.dataSource.paginator = this.paginator;
          }
        },
      });
  }

  onPageChange(event: PageEvent) {}

  delete_student(student: Student) {
    const confirmationSnackBar = this.snackbar.open(
      'Confirm Deletion',
      'Confirm',
      { duration: 7000 }
    );
    confirmationSnackBar.onAction().subscribe(() => {
      const url = `${this.api.base_uri_api}students/${student.id}`;
      this.http
        .delete(url, { withCredentials: true, observe: 'response' })
        .subscribe({
          next: (response: HttpResponse<any>) => {
            if (response.ok) {
              this.get_students();
            }
          },
        });
    });
  }
}
