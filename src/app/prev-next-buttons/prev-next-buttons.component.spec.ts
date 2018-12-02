import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevNextButtonsComponent } from './prev-next-buttons.component';

describe('PrevNextButtonsComponent', () => {
  let component: PrevNextButtonsComponent;
  let fixture: ComponentFixture<PrevNextButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevNextButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevNextButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
