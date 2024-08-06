import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements AfterViewInit, OnDestroy {

  @ViewChild('sidenav') public sidenav: MatSidenav | null = null;

  private sidenavSubscription: Subscription | null = null;

  constructor(private sidenavService: SidenavService) { }

  ngAfterViewInit(): void {
    this.sidenavSubscription = this.sidenavService.getSidenavState().subscribe(isOpen => {
      if (isOpen) {
        this.sidenav?.open();
      }
      else {
        this.sidenav?.close()
      }
    })
  }

  ngOnDestroy(): void {
    if (this.sidenavSubscription) {
      this.sidenavSubscription.unsubscribe();
    }
  }

  clickMenu() {
    this.sidenavService.toggle();
  }

}
