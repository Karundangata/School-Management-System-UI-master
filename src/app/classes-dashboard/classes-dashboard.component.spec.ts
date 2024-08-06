import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesDashboardComponent } from './classes-dashboard.component';

describe('ClassesDashboardComponent', () => {
  let component: ClassesDashboardComponent;
  let fixture: ComponentFixture<ClassesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassesDashboardComponent]
    });
    fixture = TestBed.createComponent(ClassesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
