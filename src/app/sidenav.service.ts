import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  //BehaviorSubject - acts as a special kind of observable 
  //and allows components to subscribe to it and receive updates whenever new data is emitted

  //Behaviour subject to keep track of the sidenav state
  public sideNavToggleSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  public toggle() {
    const currentState = this.sideNavToggleSubject.value;
    this.sideNavToggleSubject.next(!currentState);
  }

  //method to open the sidenav
  public open() {
    this.sideNavToggleSubject.next(true)
  }

  //method to close the sidenav
  public close() {
    this.sideNavToggleSubject.next(false);
  }

  //method to get sidenav toggle state as an observable
  public getSidenavState() {
    return this.sideNavToggleSubject.asObservable();
  }
}
