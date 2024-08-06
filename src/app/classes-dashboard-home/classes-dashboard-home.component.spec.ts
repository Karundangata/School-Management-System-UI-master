import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesDashboardHomeComponent } from './classes-dashboard-home.component';

describe('ClassesDashboardHomeComponent', () => {
  let component: ClassesDashboardHomeComponent;
  let fixture: ComponentFixture<ClassesDashboardHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassesDashboardHomeComponent]
    });
    fixture = TestBed.createComponent(ClassesDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
