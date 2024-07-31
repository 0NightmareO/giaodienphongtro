import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordBaseComponent } from './change-password-base.component';

describe('ChangePasswordBaseComponent', () => {
  let component: ChangePasswordBaseComponent;
  let fixture: ComponentFixture<ChangePasswordBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangePasswordBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
