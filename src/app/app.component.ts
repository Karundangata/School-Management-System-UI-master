import { Component } from '@angular/core';
import { XsrfService } from './xsrf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'school-management-system';
  constructor(private xsrf: XsrfService) { }
}
