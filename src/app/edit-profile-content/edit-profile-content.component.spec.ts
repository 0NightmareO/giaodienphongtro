import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileContentComponent } from './edit-profile-content.component';

describe('EditProfileContentComponent', () => {
  let component: EditProfileContentComponent;
  let fixture: ComponentFixture<EditProfileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProfileContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
