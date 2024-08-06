import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-enrollments-dashboard',
  templateUrl: './enrollments-dashboard.component.html',
  styleUrls: ['./enrollments-dashboard.component.scss']
})
export class EnrollmentsDashboardComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  public sidenavSubscription: Subscription | null = null;
  constructor(private api: ApiService, private sidenavService: SidenavService) { }
  ngAfterViewInit(): void {
    this.sidenavSubscription = this.sidenavService.getSidenavState().subscribe(isOpen => {
      if (isOpen) {
        this.sidenav?.open()
      }
      else {
        this.sidenav?.close()
      }
      this.sidenav?.open()
    })
  }
  clickMenu() {
    this.sidenavService.toggle();
  }
}
