import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListBaseComponent } from './news-list-base.component';

describe('NewsListBaseComponent', () => {
  let component: NewsListBaseComponent;
  let fixture: ComponentFixture<NewsListBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsListBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsListBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
