import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClassDialogComponent } from '../add-class-dialog/add-class-dialog.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Class } from '../shared/interfaces/class.interface';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { EditClassDialogComponent } from '../edit-class-dialog/edit-class-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-classes-dashboard-home',
  templateUrl: './classes-dashboard-home.component.html',
  styleUrls: ['./classes-dashboard-home.component.scss'],
})
export class ClassesDashboardHomeComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  displayedColumns: string[] = ['class_id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<Class>();

  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.get_classes();
  }

  addClass() {
    let dialogRef = this.dialog.open(AddClassDialogComponent, {
      width: '900px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.get_classes();
    });
  }

  get_classes() {
    const url = `${this.api.base_uri_api}classes`;
    this.http
      .get(url, { withCredentials: true, observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          this.dataSource.data = response.body.classes;
          this.dataSource.paginator = this.paginator;
        },
      });
  }

  onPageChange(event: PageEvent) {}

  edit_class(school_class: Class) {
    let dialogRef = this.dialog.open(EditClassDialogComponent, {
      width: '900px',
      data: school_class,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.get_classes();
    });
  }

  delete_class(school_class: Class) {
    const confirmationSnackBar = this.snackBar.open(
      'Confirm Deletion',
      'Confirm',
      { duration: 7000 }
    );
    confirmationSnackBar.onAction().subscribe(() => {
      const url = `${this.api.base_uri_api}classes/${school_class.id}`;
      this.http
        .delete(url, { withCredentials: true, observe: 'response' })
        .subscribe({
          next: (response: HttpResponse<any>) => {
            if (response.ok) {
            }
          },
        });
    });
  }
}
