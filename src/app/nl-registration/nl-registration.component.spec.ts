import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlRegistrationComponent } from './nl-registration.component';

describe('NlRegistrationComponent', () => {
  let component: NlRegistrationComponent;
  let fixture: ComponentFixture<NlRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
