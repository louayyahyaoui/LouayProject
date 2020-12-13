import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherStartComponent } from './weather-start.component';

describe('WeatherStartComponent', () => {
  let component: WeatherStartComponent;
  let fixture: ComponentFixture<WeatherStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
