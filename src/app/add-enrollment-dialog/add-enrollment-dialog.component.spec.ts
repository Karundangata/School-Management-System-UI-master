import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnrollmentDialogComponent } from './add-enrollment-dialog.component';

describe('AddEnrollmentDialogComponent', () => {
  let component: AddEnrollmentDialogComponent;
  let fixture: ComponentFixture<AddEnrollmentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEnrollmentDialogComponent]
    });
    fixture = TestBed.createComponent(AddEnrollmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
