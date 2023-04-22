import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeOneComponent } from './customize-one.component';

describe('CustomizeOneComponent', () => {
  let component: CustomizeOneComponent;
  let fixture: ComponentFixture<CustomizeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
