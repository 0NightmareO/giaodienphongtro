import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFormComponent } from './find-form.component';

describe('FindFormComponent', () => {
  let component: FindFormComponent;
  let fixture: ComponentFixture<FindFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
