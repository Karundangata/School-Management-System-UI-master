import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {
    MatNativeDateModule,
} from '@angular/material/core';

@NgModule({
    exports: [
        MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule,
        MatSidenavModule, MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatPaginatorModule, MatTableModule, MatPaginatorModule, MatSortModule

    ]
})
export class MaterialModule { }
