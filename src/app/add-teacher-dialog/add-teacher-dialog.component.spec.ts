import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherDialogComponent } from './add-teacher-dialog.component';

describe('AddTeacherDialogComponent', () => {
  let component: AddTeacherDialogComponent;
  let fixture: ComponentFixture<AddTeacherDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTeacherDialogComponent]
    });
    fixture = TestBed.createComponent(AddTeacherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
