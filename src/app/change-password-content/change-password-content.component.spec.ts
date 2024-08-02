import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordContentComponent } from './change-password-content.component';

describe('ChangePasswordContentComponent', () => {
  let component: ChangePasswordContentComponent;
  let fixture: ComponentFixture<ChangePasswordContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangePasswordContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
