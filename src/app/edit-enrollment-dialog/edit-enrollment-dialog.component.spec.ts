import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnrollmentDialogComponent } from './edit-enrollment-dialog.component';

describe('EditEnrollmentDialogComponent', () => {
  let component: EditEnrollmentDialogComponent;
  let fixture: ComponentFixture<EditEnrollmentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEnrollmentDialogComponent]
    });
    fixture = TestBed.createComponent(EditEnrollmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
