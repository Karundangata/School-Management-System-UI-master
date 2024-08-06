import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassDialogComponent } from './add-class-dialog.component';

describe('AddClassDialogComponent', () => {
  let component: AddClassDialogComponent;
  let fixture: ComponentFixture<AddClassDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddClassDialogComponent]
    });
    fixture = TestBed.createComponent(AddClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
