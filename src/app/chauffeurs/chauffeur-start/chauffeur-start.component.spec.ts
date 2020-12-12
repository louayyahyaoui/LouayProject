import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeurStartComponent } from './chauffeur-start.component';

describe('ChauffeurStartComponent', () => {
  let component: ChauffeurStartComponent;
  let fixture: ComponentFixture<ChauffeurStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeurStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeurStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
