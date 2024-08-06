import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-classes-dashboard',
  templateUrl: './classes-dashboard.component.html',
  styleUrls: ['./classes-dashboard.component.scss']
})
export class ClassesDashboardComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  public sidenavSubscription: Subscription | null = null;
  constructor(private sidenavService: SidenavService) {
  }

  ngAfterViewInit() {
    this.sidenavSubscription = this.sidenavService.getSidenavState().subscribe(isOpen => {
      if (isOpen) {
        this.sidenav?.open();
      } else {
        this.sidenav?.close();
      }
    })
    this.sidenav.open();
  }

  clickMenu() {
    this.sidenavService.toggle();
  }

}
