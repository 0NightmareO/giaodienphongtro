import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRoommateComponent } from './find-roommate.component';

describe('FindRoommateComponent', () => {
  let component: FindRoommateComponent;
  let fixture: ComponentFixture<FindRoommateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindRoommateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindRoommateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
