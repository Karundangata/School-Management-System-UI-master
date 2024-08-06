import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidenavService } from '../sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @ViewChild('sidenav') public sidenav: MatSidenav | null = null;
  private sidenavSubscription: Subscription | null = null;
  constructor(private sidenavService: SidenavService) {
    this.sidenavSubscription = sidenavService.getSidenavState().subscribe(isOpen => {
      if (isOpen) {
        this.sidenav?.open()
      }
      else {
        this.sidenav?.close()
      }
    })
    this.sidenav?.open();
  }

  clickMenu() {
    this.sidenavService.toggle();
  }


}
