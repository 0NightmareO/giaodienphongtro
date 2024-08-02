import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOwnerContentComponent } from './register-owner-content.component';

describe('RegisterOwnerContentComponent', () => {
  let component: RegisterOwnerContentComponent;
  let fixture: ComponentFixture<RegisterOwnerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterOwnerContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOwnerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
