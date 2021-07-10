import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfeedbackbyidComponent } from './getfeedbackbydocid.component';

describe('GetfeedbackbyidComponent', () => {
  let component: GetfeedbackbyidComponent;
  let fixture: ComponentFixture<GetfeedbackbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetfeedbackbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfeedbackbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
