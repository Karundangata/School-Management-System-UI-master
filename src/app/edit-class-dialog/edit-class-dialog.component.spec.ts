import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassDialogComponent } from './edit-class-dialog.component';

describe('EditClassDialogComponent', () => {
  let component: EditClassDialogComponent;
  let fixture: ComponentFixture<EditClassDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditClassDialogComponent]
    });
    fixture = TestBed.createComponent(EditClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
