import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSecComponent } from './video-sec.component';

describe('VideoSecComponent', () => {
  let component: VideoSecComponent;
  let fixture: ComponentFixture<VideoSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
