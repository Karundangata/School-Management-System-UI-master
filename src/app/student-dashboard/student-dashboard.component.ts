import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnDestroy, AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav | null = null;

  private sidenavSubscription: Subscription | null = null;

  constructor(private sideNavService: SidenavService) { }

  ngAfterViewInit() {
    this.sidenavSubscription = this.sideNavService.getSidenavState().subscribe(isOpen => {

      if (isOpen) {
        this.sidenav?.open();
      }
      else {
        this.sidenav?.close();
      }
    })

    //open the sidenav when the component initializes
    this.sideNavService.open();
  }

  ngOnDestroy() {
    //unsubscribe to prevent memory leaks
    if (this.sidenavSubscription) {
      this.sidenavSubscription.unsubscribe();
    }
  }

  clickMenu() {
    this.sideNavService.toggle();
  }

}
