import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRoommateBaseComponent } from './find-roommate-base.component';

describe('FindRoommateBaseComponent', () => {
  let component: FindRoommateBaseComponent;
  let fixture: ComponentFixture<FindRoommateBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindRoommateBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindRoommateBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
