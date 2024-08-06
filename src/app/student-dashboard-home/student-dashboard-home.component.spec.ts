import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardHomeComponent } from './student-dashboard-home.component';

describe('StudentDashboardHomeComponent', () => {
  let component: StudentDashboardHomeComponent;
  let fixture: ComponentFixture<StudentDashboardHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDashboardHomeComponent]
    });
    fixture = TestBed.createComponent(StudentDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
