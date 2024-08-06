import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentsDashboardHomeComponent } from './enrollments-dashboard-home.component';

describe('EnrollmentsDashboardHomeComponent', () => {
  let component: EnrollmentsDashboardHomeComponent;
  let fixture: ComponentFixture<EnrollmentsDashboardHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentsDashboardHomeComponent]
    });
    fixture = TestBed.createComponent(EnrollmentsDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
