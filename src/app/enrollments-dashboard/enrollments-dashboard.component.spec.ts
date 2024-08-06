import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentsDashboardComponent } from './enrollments-dashboard.component';

describe('EnrollmentsDashboardComponent', () => {
  let component: EnrollmentsDashboardComponent;
  let fixture: ComponentFixture<EnrollmentsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentsDashboardComponent]
    });
    fixture = TestBed.createComponent(EnrollmentsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
