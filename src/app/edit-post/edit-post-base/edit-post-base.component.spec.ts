import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostBaseComponent } from './edit-post-base.component';

describe('EditPostBaseComponent', () => {
  let component: EditPostBaseComponent;
  let fixture: ComponentFixture<EditPostBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPostBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPostBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
