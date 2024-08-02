import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListContentComponent } from './news-list-content.component';

describe('NewsListContentComponent', () => {
  let component: NewsListContentComponent;
  let fixture: ComponentFixture<NewsListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsListContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
