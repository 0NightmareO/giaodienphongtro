import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileBaseComponent } from './edit-profile-base.component';

describe('EditProfileBaseComponent', () => {
  let component: EditProfileBaseComponent;
  let fixture: ComponentFixture<EditProfileBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProfileBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
